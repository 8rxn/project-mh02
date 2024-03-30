"use client";

import React, { useEffect, useState } from "react";

import TextMessage from "../../components/messages/TextMessage";
import ImgMessage from "../../components/messages/ImgMessage";
import ChatNav from "../../components/navbar/ChatNav";
import { ScrollShadow, Tooltip } from "@nextui-org/react";
import { IoSend } from "react-icons/io5";

import Chat from "../../components/messages/Chat";
import {
  message,
  createDataItemSigner,
  dryrun,
} from "@permaweb/aoconnect/browser";

export default function Page() {
  const chats = [];

  const process = "gmMOBLRM6Yk4nnhT033BlzAvzh2nWUikM2pr-2eFwFg";



  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [nextIndex, setNextIndex] = useState(-1);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [messages, setMessages] = useState([]);


  const [myId,setMyId] = useState("")

  const sendMessages = async (msg) => {
    const rz = await message({
      process: "gmMOBLRM6Yk4nnhT033BlzAvzh2nWUikM2pr-2eFwFg",
      signer: createDataItemSigner(window.arweaveWallet),
      data: msg,
      tags: [
        {
          name: "Action",
          value: "Chat",
        },
      ],
    });
    console.log(rz);

    setMessages([
      ...messages,
      {
        Data: msg,
        From: await window.arweaveWallet.getActiveAddress(),
      },
    ]);
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

    console.log(rz);
  };

  const botCommand = async (bot) => {
    const rz = await message({
      process,
      signer: createDataItemSigner(window.arweaveWallet),
      tags: [
        {
          name: "Action",
          value: "BotCommand",
        },
        {
          name: "Bot",
          value: bot,
        },
      ],
    });

    console.log(rz);
  };

  const uploadImage = async (file) => {
    await fetch("https://api.liteseed.xyz/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        file: file,
        tags: "",
      }),
    });
  };

  const getInboxCount = async () => {
    const rz = await dryrun({
      process,
      tags: [{ name: "Action", value: "#Inbox" }],
    });

    console.log(rz);
    return Promise.resolve(
      rz?.Messages[0]?.Tags?.find((t) => t.name == "InboxCount").value
    );
  };

  async function getMessages() {
    const rz = await dryrun({
      process,
      tags: [
        {
          name: "Target",
          value: process,
        },
        { name: "Action", value: "CheckInbox" },
        { name: "Index", value: nextIndex.toString() },
      ],
    });
    console.log(rz);

    return Promise.resolve(rz?.Messages[0]?.Tags);
  }

  // async function checkRegisteration() {
  //   const addrs = (await window.arweaveWallet.getActiveAddress()).split(" ")[1];

  //   console.log(addrs);

  //   if (!addrs) {
  //     return Promise.resolve(false);
  //   }

  //   const rz = await dryrun({
  //     process,
  //     tags: [
  //       {
  //         name: "Action",
  //         value: "Registeration",
  //       },
  //       {
  //         name: "From",
  //         value: addrs,
  //       },
  //     ],
  //   });

  //   return Promise.resolve(rz);
  // }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    async function init() {
      // const registration = await checkRegisteration();
      // console.log(registration);
      const rz = await getMessages();
      // console.log(rz);

      console.log(rz.filter((t) => t.name == "Messages")[0].value);
      // console.log(r);
      setMessages(rz.filter((t) => t.name == "Messages")[0].value);
     
      const pr = await window.arweaveWallet.getActiveAddress()
      if(pr){
        setMyId(pr)
      }
      else{
        setMyId(async()=>await window.arweaveWallet.getActiveAddress())
      }

      console.log(myId,pr)
    }

    init();
  }, [myId]);

  return (
    <div className="relative flex flex-col-reverse lg:flex-row gap-2 bg-black min-h-screen">
      <div className="relative flex flex-col w-full mt-[200px] lg:mt-0 lg:w-[300px] bg-black mx-auto max-h-[720px]">
        <div className="text-white border-[1px] border-gray-700 rounded-xl min-h-[300px] max-h-[350px]">
          <p className="text-white p-4 text-lg font-bold border-b-1 border-b-gray-700">
            All Chats
          </p>
          <ScrollShadow hideScrollBar className="max-h-[300px] overflow-scroll">
            {chats.map(({ chatroom, chatId }, index) => (
              <Chat key={index} chatroom={chatroom} chatId={chatId} />
            ))}
          </ScrollShadow>
        </div>
        <div className="flex justify-center items-center border-[1px] border-gray-700 rounded-xl min-h-[300px] max-h-[350px] mt-2">
          <p className="text-white">Explore Chat Bots</p>
        </div>
      </div>
      <div className="w-full bg-black mx-auto mt-2 max-h-[400px]">
        <ChatNav />

        <div className="mx-auto w-auto overflow-auto relative bg-[#080808]">
          <ScrollShadow
            hideScrollBar
            size={100}
            offset={30}
            className="flex flex-col gap-2 p-2 max-h-[74dvh] sm:max-h-[76vh] md:min-h-[76vh] xl:min-h-[60vh] 2xl:max-h-[500px] overflow-scroll "
          >
            {messages?.map(({ Data, From, time }, index) => {
              if (Data?.startsWith("image-id:")) {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <ImgMessage
                    name={From}
                    time={time}
                    src={`https://api.liteseed.xyz/data/${Data.split(":")[1]}`}
                  />
                );
              } else {
                return (
                  <TextMessage
                    key={index}
                    message={Data}
                    name={From}
                    time={time}
                    me={myId}
                  />
                );
              }
            })}
          </ScrollShadow>

          <Input sendMessage={sendMessages} />
        </div>
      </div>
    </div>
  );

  function Input({ sendMessage, sendImage }) {
    const [input, setInput] = useState("");

    const [file, setFile] = useState(null);

    //   const messages = useStore((state) => state.messages);
    //   const addMessage = useStore((state) => state.sendMessage);

    const send = async () => {
      console.log("send");
      await sendMessage(input);
      setInput("");
    };

    useEffect(() => {
      const input = document.querySelector("input");
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !!input) {
          send();
        }

        return () => {
          input.removeEventListener("keydown", (e) => {
            if (e.key === "Enter") {
              send();
            }
          });
        };
      });
    }, []);

    function getBase64(file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        console.log(reader.result);
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    }

    const uploadImage = async () => {
      const data = new FormData();
      const fileT = document.querySelector("input[type=file]").files[0];
      data.append("file", fileT);

      const response = await fetch("https://api.liteseed.xyz/data", {
        method: "POST",
        body: data,
      });

      const res = await response.json();

      console.log(res.id);

      const msg = `image-id:${res.id}`;

      await sendMessage(msg);
    };

    return (
      <div className="flex flex-row items-center h-16 rounded-b-xl p-4 bg-black w-full border-[1px] border-gray-700">
        <div className="flex-grow">
          <div className="relative flex justify-start items-center">
            <div>
              <input
                type="file"
                onChange={(e) => setFile(e.target.value)}
                aria-label="Upload"
              />
              {file && (
                <button
                  className="bg-gray-50 absolute z-10"
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
            />
          </div>
        </div>
        <div
          onClick={() => {
            console.log("testes");
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
