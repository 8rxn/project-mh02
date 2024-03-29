import React from "react";
import TextMessage from "../../components/messages/TextMessage";
import ImgMessage from "../../components/messages/ImgMessage";
import ChatNav from "../../components/navbar/ChatNav";

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
    <div className="min-h-screen bg-black max-w-3xl mx-auto">
      <ChatNav />
      <div className="mx-auto w-auto min-h-[86dvh] sm:min-h-[90vh] 2xl:min-h-[92vh] rounded-xl border-none sm:p-4 p-2 overflow-auto relative">
        <div className="flex flex-col gap-2 max-h-[72dvh] sm:max-h-[76vh] md:min-h-[76vh] xl:min-h-[60vh] 2xl:max-h-[75vh] overflow-scroll chat-container">
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
    <div className="flex flex-row items-center h-16 rounded-sm bg-black w-full px-0 mt-2 sm:mt-4">
      <div className="flex-grow">
        <div className="relative w-full">
          <input
            type="text"
            className="flex w-full rounded-r-none rounded-l-md focus:outline-none pl-4 h-10 bg-black border-b-1 border-b-gray-400 text-white"
          />
        </div>
      </div>
      <div className="">
        <button className="flex items-center justify-center bg-black hover:bg-blue-600 text-white px-4 py-2 flex-shrink-0 rounded-l-none rounded-r-md">
          <span>Send</span>
          <span className="ml-2">
            <svg
              className="w-4 h-4 transform rotate-45 -mt-px"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}