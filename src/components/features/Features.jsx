import React from "react";
import { BentoGrid, BentoGridItem } from "../BentoGrid";
import { FaRegCircle } from "react-icons/fa";

import { FaBoltLightning } from "react-icons/fa6";
import { TbWorldLongitude } from "react-icons/tb";
import { LiaNetworkWiredSolid } from "react-icons/lia";

export default function Features() {
  return (
    <BentoGrid
      className="max-w-5xl mx-auto md:auto-rows-[20rem]"
      id="WcFeatures"
    >
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Hyper",
    description: "Large Scale distributed Compute powered by AO",
    className: "md:col-span-2",
    icon: <FaBoltLightning className="h-12 w-12 text-white" />,
  },
  {
    title: "Customizable & Adaptive",
    description: "Create your own Chatroom and Bots just the way suited to your needs",
    className: "md:col-span-1",
    icon: <FaRegCircle className="h-12 w-12 text-white" />,
  },
  {
    title: "Decentralized",
    description: "Decentralized Chat for all communities",
    className: "md:col-span-1",
    icon: <LiaNetworkWiredSolid className="h-12 w-12 text-white" />,
  },
  {
    title: "Permaweb Chatroom",
    description: "Permaweb storage for all messages and media files.",
    className: "md:col-span-2",
    icon: <TbWorldLongitude className="h-12 w-12 text-white" />,
  },
];
