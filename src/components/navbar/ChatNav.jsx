"use client";
import React from "react";
import { Tooltip } from "@nextui-org/react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { ConnectButton } from "arweave-wallet-kit";

export default function ChatNav({Name, RoomId}) {
  return (
    <div className="flex justify-between items-center bg-black p-4 text-white border-[1px] border-gray-700 rounded-t-xl rounded-b-none">
      <div className="flex justify-start items-center gap-2">
        <Tooltip content="All Chats">
          <a
            href="/chats"
            className="text-white text-2xl bg-transparent py-0 px-2"
          >
            <IoArrowBackCircleOutline />
          </a>
        </Tooltip>
        <div className="flex flex-col sm:flex-row sm:gap-3 sm:items-center justify-center">
          <p className="font-bold text-md sm:text-2xl">
            {Name}
          </p>
          <p
            className="font-RobotoMono text-xs sm:text-lg max-w-[80px] sm:max-w-[300px] sm:max-w-auto text-ellipsis line-clamp-1 text-gray-400"
            href="/"
          >
            {RoomId}
          </p>
        </div>
      </div>
      <div justify="end">
        <ConnectButton
          accent="rgb(149, 164, 252)"
          profileModal={true}
          showBalance={false}
        />
      </div>
    </div>
  );
}
