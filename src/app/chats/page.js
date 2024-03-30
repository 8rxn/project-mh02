"use client";
import React from "react";
import ChatsNav from "../../components/navbar/ChatsNav";
import CardHover from "../../components/CardHover";
import { ScrollShadow } from "@nextui-org/react";
import BotCard from "../../components/bots/BotCard";

function Page() {
  return (
    <>
      <ChatsNav />
      <div className="min-h-screen mt-20 flex flex-col-reverse lg:flex-row mx-auto">
        <ScrollShadow hideScrollBar className="md:max-h-[85vh]">
          <CardHover items={saareChats} />
        </ScrollShadow>
        <div className="col-span-1 text-white py-5 mt-[5px] md:max-h-[85vh] w-full lg:max-w-[300px]">
          <div className="border-1 rounded-md border-gray-700 h-full w-full">
            <p className="font-bold text-2xl my-3 mx-4">Explore Bots</p>
            <ScrollShadow hideScrollBar className="h-full w-full">
              <BotCard/>
            </ScrollShadow>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;

const saareChats = [
  {
    title: "Chat Room 1",
    roomid: "#12397658",
    description:
      "Community Chatroom for our technology that is meant for building economic infrastructure for the internet.",
    link: "/chat",
  },
  {
    title: "Chat Room 2",
    roomid: "#12397658",
    description:
      "Community Chatroom for our technology that is meant for building economic infrastructure for the internet.",
    link: "/chat",
  },
  {
    title: "Chat Room 3",
    roomid: "#12397658",
    description:
      "Community Chatroom for our technology that is meant for building economic infrastructure for the internet.",
    link: "/chat",
  },
  {
    title: "Chat Room 4",
    roomid: "#12397658",
    description:
      "Community Chatroom for our technology that is meant for building economic infrastructure for the internet.",
    link: "/chat",
  },
  {
    title: "Chat Room 5",
    roomid: "#12397658",
    description:
      "Community Chatroom for our technology that is meant for building economic infrastructure for the internet.",
    link: "/chat",
  },
  {
    title: "Chat Room 6",
    roomid: "#12397658",
    description:
      "Community Chatroom for our technology that is meant for building economic infrastructure for the internet.",
    link: "/chat",
  },
  {
    title: "Chat Room 7",
    roomid: "#12397658",
    description:
      "Community Chatroom for our technology that is meant for building economic infrastructure for the internet.",
    link: "/chat",
  },
  {
    title: "Chat Room 5",
    roomid: "#12397658",
    description:
      "Community Chatroom for our technology that is meant for building economic infrastructure for the internet.",
    link: "/chat",
  },
  {
    title: "Chat Room 6",
    roomid: "#12397658",
    description:
      "Community Chatroom for our technology that is meant for building economic infrastructure for the internet.",
    link: "/chat",
  },
  {
    title: "Chat Room 7",
    roomid: "#12397658",
    description:
      "Community Chatroom for our technology that is meant for building economic infrastructure for the internet.",
    link: "/chat",
  },
  {
    title: "Chat Room 5",
    roomid: "#12397658",
    description:
      "Community Chatroom for our technology that is meant for building economic infrastructure for the internet.",
    link: "/chat",
  },
  {
    title: "Chat Room 6",
    roomid: "#12397658",
    description:
      "Community Chatroom for our technology that is meant for building economic infrastructure for the internet.",
    link: "/chat",
  },
  {
    title: "Chat Room 7",
    roomid: "#12397658",
    description:
      "Community Chatroom for our technology that is meant for building economic infrastructure for the internet.",
    link: "/chat",
  },
  {
    title: "Chat Room 5",
    roomid: "#12397658",
    description:
      "Community Chatroom for our technology that is meant for building economic infrastructure for the internet.",
    link: "/chat",
  },
  {
    title: "Chat Room 6",
    roomid: "#12397658",
    description:
      "Community Chatroom for our technology that is meant for building economic infrastructure for the internet.",
    link: "/chat",
  },
  {
    title: "Chat Room 7",
    roomid: "#12397658",
    description:
      "Community Chatroom for our technology that is meant for building economic infrastructure for the internet.",
    link: "/chat",
  },
];
