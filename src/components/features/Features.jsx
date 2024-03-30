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
    description: "Explore the birth of groundbreaking ideas and inventions.",
    className: "md:col-span-2",
    icon: <FaBoltLightning className="h-12 w-12 text-white" />,
  },
  {
    title: "Parallel",
    description: "Dive into the transformative power of technology.",
    className: "md:col-span-1",
    icon: <FaRegCircle className="h-12 w-12 text-white" />,
  },
  {
    title: "Decentralized",
    description: "Discover the beauty of thoughtful and functional design.",
    className: "md:col-span-1",
    icon: <LiaNetworkWiredSolid className="h-12 w-12 text-white" />,
  },
  {
    title: "Permaweb Chatroom",
    description:
      "Understand the impact of effective communication in our lives.",
    className: "md:col-span-2",
    icon: <TbWorldLongitude className="h-12 w-12 text-white" />,
  },
];
