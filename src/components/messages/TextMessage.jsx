"use client";
import React from "react";

function TextMessage({ message, name, time }) {
  const isAssistant = name === "Assistant";

  return (
    <div
      className={`flex items-start gap-1 ${
        isAssistant ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`flex flex-col max-w-[320px] leading-1.5 px-4 py-2 border-gray-200 bg-gray-800 rounded-b-xl ${
          isAssistant ? "rounded-r-xl" : "rounded-l-xl"
        }`}
      >
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-[16px] font-semibold text-white">{name}</span>
          <span className="text-[12px] font-normal text-gray-400">{time}</span>
        </div>
        <p className="text-[14px] font-normal py-1 text-white font-Gabarito">
          {message}
        </p>
      </div>
    </div>
  );
}

export default TextMessage;