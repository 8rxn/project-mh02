import React from "react";
import TextMessage from "../../components/messages/TextMessage";
import ImgMessage from "../../components/messages/ImgMessage";
import ChatNav from "../../components/navbar/ChatNav";
import { IoSend } from "react-icons/io5";


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
  return (
    <div className="min-h-screen bg-black max-w-[95%] mx-auto mt-2">
      <ChatNav />
      <div className="mx-auto w-auto min-h-[86dvh] sm:min-h-[90vh] 2xl:min-h-[92vh] overflow-auto relative bg-[#080808]">
        <div className="flex flex-col gap-2 max-h-[72dvh] sm:max-h-[76vh] md:min-h-[76vh] xl:min-h-[60vh] 2xl:max-h-[75vh] overflow-scroll chat-container border-l-[1px] border-r-[1px] border-gray-700 sm:p-4 p-2">
          {messages.map(({ message, name, time }, index) => (
            <TextMessage
              key={index}
              message={message}
              name={name}
              time={time}
            />
          ))}
          <ImgMessage />
        </div>
        <Input />
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
        <button className="flex items-center justify-center text-white hover:text-[#95A4FC] py-3 pl-3 flex-shrink-0 rounded-full text-2xl">
          <IoSend/>
        </button>
      </div>
    </div>
  );
}