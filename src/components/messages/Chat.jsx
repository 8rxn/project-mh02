'use client'
import React from "react";

export default function Chat({ chatroom, chatId, currentId }) {
  const status = chatId === currentId;
  return (
    <div  className={`w-full px-3 py-3 border-b-[1px] border-gray-700 hover:bg-[#101010] cursor-pointer ${status ? 'bg-gray-900' : 'bg-black' }`}>
      <p className="text-white text-md font-bold">{chatroom}</p>
      <p className="text-gray-300 text-xs text-ellipsis line-clamp-1 max-w-[200px]">
        {chatId}
      </p>
    </div>
  );
}
