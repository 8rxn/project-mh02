"use client";
import React from "react";
import { Link, Button } from "@nextui-org/react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { ConnectButton } from "arweave-wallet-kit";

export default function ChatNav() {
  return (
    <div className="flex justify-between items-center bg-black p-4 text-white border-[1px] border-gray-700 rounded-t-xl rounded-b-none">
      <div className="flex justify-center items-center gap-2">
        <Button as={Link} href="/chats" className="text-white text-2xl">
          <IoArrowBackCircleOutline />
        </Button>
        <div className="flex flex-col sm:flex-row sm:gap-3 sm:items-center justify-center">
          <a className="font-bold font-Gabarito text-md sm:text-2xl" href="/">
            Chat Room 01
          </a>
          <p
            className="font-regular font-Poppins text-xs sm:text-lg max-w-[300px] sm:max-w-auto text-ellipsis line-clamp-1 text-gray-400"
            href="/"
          >
            #chatid909887
          </p>
        </div>
      </div>
      <div justify="end">
        {/* <Button
          as={Link}
          href="/"
          variant="flat"
          className="text-white font-Poppins bg-opacity-100 bg-[#95A4FC] font-medium text-sm sm:text-md rounded-lg py-2 px-6"
        >
          Connect Wallet
        </Button> */}
        <ConnectButton
          accent="rgb(59, 130, 246)"
          profileModal={false}
          showBalance={false}
        />
      </div>
    </div>
  );
}
