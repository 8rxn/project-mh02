"use client";
import React from "react";
import ChatsNav from "../../components/navbar/ChatsNav";
import CardHover from "../../components/CardHover";
import { ScrollShadow } from "@nextui-org/react";
import BotCard from "../../components/bots/BotCard";
import {GridSmallBackground} from "../../components/hero/GridBackground"

function Page() {
  return (
    <GridSmallBackground>
      <div className="min-h-screen flex flex-col lg:flex-row mx-auto w-[95vw] sm:w-[80vw] py-4 gap-3">
        <div className="relative flex flex-col w-full">
          <ChatsNav />
          <ScrollShadow hideScrollBar className="md:max-h-[80vh] w-full">
            <CardHover items={saareChats} />
          </ScrollShadow>
        </div>
        <div className=" text-white md:max-h-[85vh] w-full lg:max-w-[300px]">
          <div className="border-1 rounded-md border-gray-700 h-full w-full bg-[#0b0b0b]">
            <p className="font-RobotoMono text-xl my-3 mx-4">Explore Bots</p>
            <ScrollShadow hideScrollBar className="h-full w-full">
              <BotCard />
            </ScrollShadow>
          </div>
        </div>
      </div>
    </GridSmallBackground>
  );
}

export default Page;


const saareChats = [
  {
    title: "Chat Room 1",
    roomid: "#12397658",
    link: "/chat",
  },
  {
    title: "Chat Room 2",
    roomid: "#32397238",
    link: "/chat",
  },
  {
    title: "Chat Room 3",
    roomid: "#85327633",
    link: "/chat",
  },
  {
    title: "Chat Room 4",
    roomid: "#78397759",
    link: "/chat",
  },
  {
    title: "Chat Room 5",
    roomid: "#22387650",
    link: "/chat",
  },
  {
    title: "Chat Room 6",
    roomid: "#10399859",
    link: "/chat",
  },
  {
    title: "Chat Room 7",
    roomid: "#12397658",
    link: "/chat",
  },
];
