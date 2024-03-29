"use client";
import React from "react";
import ChatsNav from "../../components/navbar/ChatsNav"
import CardHover from "../../components/CardHover";

function Page() {
  return (
    <>
    <ChatsNav/>
    <div className="min-h-screen mt-20">
      <CardHover items={projects} />
    </div>
    </>
  );
}

export default Page;

const projects = [
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
];