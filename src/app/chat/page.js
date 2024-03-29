import React from "react";
import TextMessage from "../../components/messages/TextMessage";
import ImgMessage from "../../components/messages/ImgMessage";
import ChatNav from "../../components/navbar/ChatNav";
import { IoSend } from "react-icons/io5";
import { Tooltip, ScrollShadow } from "@nextui-org/react";
import Chat from "../../components/messages/Chat";

function page() {
  const messages = [
    { message: "Hey!", name: "Assistant", time: "11:56" },
    { message: "Hello", name: "Anmol", time: "11:56" },
    { message: "My issue is resolved", name: "Anmol", time: "11:56" },
    {
      message: "That's awesome. We are glad that your issue is resolved.",
      name: "Assistant",
      time: "11:56",
    },
  ];

  const chats = [
    { chatroom: "Chat Room 1", chatId: "#09876668" },
    { chatroom: "Chat Room 2", chatId: "#09876668" },
    { chatroom: "Chat Room 3", chatId: "#09876668" },
    { chatroom: "Chat Room 4", chatId: "#09876668" },
    { chatroom: "Chat Room 5", chatId: "#09876668" },
    { chatroom: "Chat Room 6", chatId: "#09876668" },
  ];
  return (
    <div className="relative flex flex-col-reverse lg:grid grid-cols-6 grid-rows-4 gap-2 min-h-screen">
      <div className="relative grid grid-rows-4 gap-2 col-span-1 row-span-4 w-full bg-black mx-auto mt-2 max-h-[95vh]">
        <div className="text-white h-full row-span-2 border-[1px] border-gray-700 rounded-xl max-h-full overflow-scroll chat-container">
          <p className="text-white p-4 text-lg font-bold border-b-1 border-b-gray-700">All Chats</p>
          {chats.map(({ chatroom, chatId }, index) => (
            <Chat key={index} chatroom={chatroom} chatId={chatId} />
          ))}
        </div>
        <div className="h-full flex justify-center items-center row-span-2  border-[1px] border-gray-700 rounded-xl">
          <p className="text-white">Explore Chat Bots</p>
        </div>
      </div>
      <div className="col-span-5 row-span-4 w-full bg-black mx-auto mt-2">
        <ChatNav />
        <div className="mx-auto w-auto overflow-auto relative bg-[#080808]">
          <ScrollShadow
            size={100}
            offset={30}
            className="flex flex-col gap-2 max-h-[72dvh] sm:max-h-[76vh] md:min-h-[76vh] xl:min-h-[60vh] 2xl:max-h-[75vh] overflow-scroll chat-container border-l-[1px] border-r-[1px] border-gray-700 sm:p-4 p-2"
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
}

export default page;

function Input() {
  return (
    <div className="flex flex-row items-center h-16 rounded-b-xl p-4 bg-black w-full border-[1px] border-gray-700">
      <div className="flex-grow">
        <div className="relative w-full">
          <input
            type="text"
            className="flex w-full focus:outline-none pl-4 h-10 bg-[#111] rounded-md border-b-1 border-b-gray-400 text-white"
          />
        </div>
      </div>
      <div>
        <Tooltip content="Send Message">
          <button className="flex items-center justify-center text-white hover:text-[#95A4FC] py-3 pl-3 flex-shrink-0 rounded-full text-2xl">
            <IoSend />
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
