"use client";

import React, { useEffect, useState } from "react";
import TextMessage from "../../components/messages/TextMessage";
import ImgMessage from "../../components/messages/ImgMessage";
import ChatNav from "../../components/navbar/ChatNav";
import { ScrollShadow, Tooltip } from "@nextui-org/react";
import { IoSend } from "react-icons/io5";
import Chat from "../../components/messages/Chat";

import { FileUploader } from "react-drag-drop-files";
import {
  message,
  createDataItemSigner,
  dryrun,
} from "@permaweb/aoconnect/browser";

export default function page() {
  const messagesinit = [
    { message: "Hey!", name: "Assistant", time: "11:56" },
    { message: "Hello", name: "Anmol", time: "11:56" },
    { message: "My issue is resolved", name: "Anmol", time: "11:56" },
    {
      message: "That's awesome. We are glad that your issue is resolved.",
      name: "Assistant",
      time: "11:56",
    },
  ];

  const chats = [];

  const [messages, setMessages] = useState([...messagesinit]);

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
  };

  const register = async (msg) => {
    const rz = await message({
      process: "gmMOBLRM6Yk4nnhT033BlzAvzh2nWUikM2pr-2eFwFg",
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
      process: "gmMOBLRM6Yk4nnhT033BlzAvzh2nWUikM2pr-2eFwFg",
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

  // const requestTokens = async () => {
  //   const rz = await message({
  //     process: "gmMOBLRM6Yk4nnhT033BlzAvzh2nWUikM2pr-2eFwFg",
  //     signer: createDataItemSigner(window.arweaveWallet),
  //     tags: [
  //       {
  //         name: "Action",
  //         value: "TokenRequest",
  //       },
  //     ],
  //   });

  //   console.log(rz);
  // };

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

  return (
    <div className="relative flex flex-col-reverse lg:flex-row gap-2 bg-black min-h-screen">
      <div className="relative flex flex-col w-full lg:w-[300px] bg-black mx-auto mt-2 max-h-[720px]">
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
            {messages.map(({ message, name, time }, index) => (
              <TextMessage
                key={index}
                message={message}
                name={name}
                time={time}
              />
            ))}
            <ImgMessage />
          </ScrollShadow>
          <Input />
        </div>
      </div>
    </div>
  );

  function Input({ sendMessage }) {
    const [input, setInput] = useState("");

    const [file, setFile] = useState(null);

    //   const messages = useStore((state) => state.messages);
    //   const addMessage = useStore((state) => state.sendMessage);

    const send = async () => {
      console.log("send");
      await sendMessage();
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
    }

    return (
      <div className="flex flex-row items-center h-16 rounded-b-xl p-4 bg-black w-full border-[1px] border-gray-700">
        <div className="flex-grow">
          <div className="relative w-full">
            <div className="flex">
              <input
                type="file"
                onChange={(e) => setFile(e.target.value)}
                Upload
                aria-label="  Upload"
              />
              {file && (
                <button className="bg-gray-50" onClick={() => uploadImage(file)}>Upload</button>
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
