"use client";
import React, { useState } from "react";
import ChatsNav from "../../components/navbar/ChatsNav";
import CardHover from "../../components/CardHover";
import { ScrollShadow } from "@nextui-org/react";
import BotCard from "../../components/bots/BotCard";
import {GridSmallBackground} from "../../components/hero/GridBackground"

function Page() {
  const [chats, setChats] = useState(allChats);

  return (
    <GridSmallBackground>
      <div className="min-h-screen flex flex-col lg:flex-row mx-auto w-[95vw] sm:w-[80vw] py-4 gap-3">
        <div className="relative flex flex-col w-full">
          <ChatsNav />
          <ScrollShadow hideScrollBar className="md:max-h-[80vh] w-full">
            <CardHover items={chats} />
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


const allChats = [
  {
    title: "Chat Room 1",
    roomid: "mK6hl6stBOfK1m66TpmYQ_3RG_FrRXWsJSdGTV6__i8",
  },
  {
    title: "Chat Room 2",
    roomid: "mK6hl6stBOfK1m66TpmYQ_3RG_FrRXWsJSdGTV6__i8",
  },
];
