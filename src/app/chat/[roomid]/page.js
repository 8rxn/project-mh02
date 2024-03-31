"use client";

import React, { useEffect, useState } from "react";

import TextMessage from "../../../components/messages/TextMessage";
import ImgMessage from "../../../components/messages/ImgMessage";
import ChatNav from "../../../components/navbar/ChatNav";
import { ScrollShadow, Tooltip, Button } from "@nextui-org/react";
import { IoSend } from "react-icons/io5";

import Chat from "../../../components/messages/Chat";
import BotCard from "@/components/bots/BotCard";
import {
  message,
  createDataItemSigner,
  dryrun,
} from "@permaweb/aoconnect/browser";

export default function Page({ params }) {
  const chats = [];
  let process = params.roomid;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [messages, setMessages] = useState([]);
  const [myId, setMyId] = useState("");
  const [tokens, setTokens] = useState(null);
  const [registered, setRegistered] = useState(false);
  const [lastCount, setLastCount] = useState(0);

  const sendMessages = async (msg) => {
    console.log("sendMessages called");
    const rz = await message({
      process,
      signer: createDataItemSigner(window.arweaveWallet),
      data: msg,
      tags: [
        {
          name: "Action",
          value: "Chat",
        },
      ],
    });

    if (rz) {
      setMessages([
        ...messages,
        {
          Data: msg,
          From: await window.arweaveWallet.getActiveAddress(),
          Timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    }
  };

  const sendBotCommand = async (msg, bot) => {
    console.log(bot, msg);
    const rz = await message({
      process,
      signer: createDataItemSigner(window.arweaveWallet),
      data: msg,
      tags: [
        {
          name: "Action",
          value: "Bot",
        },
        {
          name: "Handle",
          value: "@" + bot,
        },

        {
          name: "Message",
          value: msg,
        },
      ],
    });
  };

  const register = async (msg) => {
    const rz = await message({
      process,
      signer: createDataItemSigner(window.arweaveWallet),
      data: msg,
      tags: [
        {
          name: "Action",
          value: "Register",
        },
      ],
    });

    if (rz) {
      registerationCheck();
    }

    //console.log(rz);
  };

  const getInboxCount = async () => {
    const rz = await dryrun({
      process,
      tags: [{ name: "Action", value: "#Inbox" }],
    });
    console.log("rz", rz);
    return Promise.resolve(
      rz?.Messages[0]?.Tags?.find((t) => t.name == "InboxCount").value
    );
  };

  async function getPrevMessages() {
    console.log("called getPrevMessages");
    const rz = await dryrun({
      process,
      tags: [
        {
          name: "Target",
          value: process,
        },
        { name: "Action", value: "CheckInbox" },
      ],
    });

    return Promise.resolve(rz?.Messages[0]?.Tags);
  }

  // async function fetchNewMessages() {
  //   console.log("fetchNewMessages called");

  //   const currCount = await getInboxCount();
  //   console.log("currCount", currCount);
  //   if (currCount > lastCount) {
  //     const rz = await getPrevMessages();
  //     setLastCount(currCount);

  //     console.log(lastCount, currCount);

  //     const msgs = JSON.parse(
  //       rz.filter((t) => t.name == "Messages")[0].value
  //     ).map((m) => ({ From: m.From, Data: m.Data, Time: m.Timestamp }));

  //     setMessages(msgs);
  //   }
  // }

  async function init() {
    const rz = await getPrevMessages();

    // console.log(rz.filter((t) => t.name == "Messages")[0].value);

    const msgs = JSON.parse(
      rz.filter((t) => t.name == "Messages")[0].value
    ).map((m) => ({ From: m.From, Data: m.Data, Time: m.Timestamp }));
    console.log(msgs);
    setMessages(msgs);

    scrollBottom();

    const pr = await window.arweaveWallet.getActiveAddress();
    if (pr) {
      setMyId(pr);
    } else {
      setMyId(async () => await window.arweaveWallet.getActiveAddress());
    }
  }

  const TokenCount = async () => {
    const rz = await dryrun({
      process,
      tags: [
        {
          name: "Action",
          value: "Balance",
        },
        {
          name: "Target",
          value: (await window.arweaveWallet.getActiveAddress()).toString(),
        },
      ],
    });

    setTokens(
      rz?.Messages[0]?.Tags.filter((t) => t.name == "Balance")[0].value
    );
    return Promise.resolve(
      rz?.Messages[0]?.Tags.filter((t) => t.name == "Balance")[0].value
    );
  };

  const GetTokens = async () => {
    const rz = await message({
      process,
      signer: createDataItemSigner(window.arweaveWallet),
      tags: [
        {
          name: "Action",
          value: "#TokenRequest",
        },
      ],
    });

    if (rz) {
      console.log(rz);
      TokenCount();
    }
    return Promise.resolve(rz);
  };

  const registerationCheck = async () => {
    const rz = await dryrun({
      process,
      tags: [
        {
          name: "Action",
          value: "Registered",
        },
        {
          name: "Target",
          value: (await window.arweaveWallet.getActiveAddress()).toString(),
        },
      ],
    });

    console.log("registerationCheck", rz);

    if (
      rz?.Messages[0].Tags.filter((t) => t.name == "Success")[0].value == true
    ) {
      setRegistered(true);
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    process = `${params.roomid}`;
    TokenCount();
    registerationCheck();
    init();
  }, [myId]);

  // useEffect(() => {
  //   const fetchInterval = setInterval(() => {
  //     fetchNewMessages();
  //   }, 4000);

  //   return () => clearInterval(fetchInterval);
  // }, []);

  const scrollBottom = () => {
    const chatContainer = document.getElementById("chatcontainer");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  return (
    <div className="relative flex flex-col-reverse lg:flex-row gap-2 items-start bg-black min-h-screen">
      <div className="relative flex flex-col w-full lg:w-[300px] bg-black mx-auto max-h-[720px] lg:h-full">
        <div className="text-white border-[1px] border-gray-700 rounded-xl min-h-[300px] lg:h-1/2 max-h-[350px]">
          <p className="text-white p-4 text-lg font-bold border-b-1 border-b-gray-700">
            All Chats
          </p>
          <ScrollShadow hideScrollBar className="max-h-[300px] overflow-scroll">
            {chats.map(({ chatroom, chatId }, index) => (
              <Chat key={index} chatroom={chatroom} chatId={chatId} />
            ))}
          </ScrollShadow>
        </div>
        <div className="flex justify-start flex-col items-center border-[1px] border-gray-700 rounded-xl min-h-[300px] max-h-[350px] mt-2 overflow-hidden">
          <BotCard process={process} />
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
      <div className="w-full bg-black mx-auto h-full">
        <ChatNav Name={"Room 1"} RoomId={params.roomid} />

        {registered && (
          <div className="mx-auto w-auto overflow-auto overflow-x-hidden relative bg-[#080808] ">
            <ScrollShadow
              hideScrollBar
              size={100}
              offset={30}
              className="flex flex-col gap-2 p-2 max-h-[74dvh] sm:max-h-[76vh] md:min-h-[76vh] xl:max-h-[70vh] 2xl:max-h-[80vh] overflow-x-scroll overflow-y-hidee"
              id="chatcontainer"
            >
              {messages.length > 0 &&
                messages?.map(({ Data, From, Timestamp }, index) => {
                  const textContent = Data.includes("text-content:")
                    ? Data.split("text-content:")[1].includes("bot-name:")
                      ? Data.split("text-content:")[1].split("bot-name:")[0]
                      : Data.split("text-content:")[1]
                    : Data;

                  const botName = Data.split("bot-name:")[1];

                  const imageId = Data.split("image-id:")[1]
                    ?.split("text-content:")[0]
                    .trim();

                  if (imageId !== undefined) {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <>
                        <ImgMessage
                          name={botName !== undefined ? botName : From}
                          time={Timestamp}
                          text={textContent}
                          src={"https://api.liteseed.xyz/data/" + imageId}
                          me={myId}
                        />
                      </>
                    );
                  } else {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <TextMessage
                        key={index}
                        message={textContent}
                        name={botName !== undefined ? botName : From}
                        time={Timestamp}
                        me={myId}
                      />
                    );
                  }
                })}
            </ScrollShadow>

            <Input
              sendMessage={sendMessages}
              sendBotCommand={sendBotCommand}
              key={"input-field"}
            />
          </div>
        )}
        {!registered && (
          <div className="mx-auto w-auto overflow-auto relative min-h-[80vh] bg-[#080808] grid place-items-center">
            <div className="text-white flex flex-col gap-4 justify-center items-center">
              <p className="text-2xl font-bold">Register to Chat</p>

              <div className="mt-0">
                Your Tokens : {tokens ? tokens : "Loading..."}
              </div>
              <div className="flex items-center gap-4 justify-center ">
                <Button
                  disabled={tokens == null}
                  onClick={() => {
                    GetTokens();
                  }}
                  className="bg-[#95A4FC]"
                >
                  Get More Tokens
                </Button>
                <Button
                  disabled={tokens == null}
                  onClick={() => {
                    register();
                  }}
                  className="bg-[#95A4FC]"
                >
                  Register for Chat
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  function Input({ sendMessage, sendBotCommand }) {
    const [input, setInput] = useState("");
    const [file, setFile] = useState(null);

    //   const messages = useStore((state) => state.messages);
    //   const addMessage = useStore((state) => state.sendMessage);

    const send = async () => {
      if (input.startsWith("@")) {
        const bot = input.split("@")[1].split(" ")[0];
        const msg = input.split("@")[1].split(bot)[1];
        await sendBotCommand(msg, bot);
      }

      await sendMessage(input);
      setInput("");
    };

    // useEffect(() => {
    //   const input = document.querySelector("input");
    //   input.addEventListener("keydown", (e) => {
    //     if (e.key === "Enter" && !!input) {
    //       send();
    //     }

    //     return () => {
    //       input.removeEventListener("keydown");
    //     };
    //   });
    // }, []);

    const uploadImage = async () => {
      const data = new FormData();
      const fileT = document.querySelector("input[type=file]").files[0];
      data.append("file", fileT);

      const response = await fetch("https://api.liteseed.xyz/data", {
        method: "POST",
        body: data,
      });

      const res = await response.json();

      //console.log(res.id);

      const msg = `image-id:${res.id} text-content: ${input} `;

      await sendMessage(msg);
    };

    return (
      <div className="flex flex-row items-center h-16 rounded-b-xl p-4 bg-black w-full border-[1px] border-gray-700 sticky bottom-0">
        <div className="flex-grow">
          <div className="relative flex justify-start items-center">
            <div>
              <input
                type="file"
                onChange={(e) => setFile(e.target.value)}
                aria-label="Upload"
                className="text-white"
              />
              {file && (
                <button
                  className="bg-gray-50 absolute z-10 text-white"
                  onClick={() => {
                    uploadImage();
                  }}
                >
                  Upload
                </button>
              )}
            </div>

            <input
              type="text"
              className="flex w-full focus:outline-none pl-4 h-10 bg-black border-b-1 border-b-gray-400 text-white"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !!input) {
                  send();
                }
              }}
            />
          </div>
        </div>
        <div
          onClick={() => {
            send();
          }}
        >
          <Tooltip content="Send Message">
            <button className="flex items-center justify-center text-white hover:text-[#95A4FC] py-3 pl-3 flex-shrink-0 rounded-full text-2xl">
              <IoSend />
            </button>
          </Tooltip>
        </div>
      </div>
    );
  }
}