"use client";
import React, { useState } from "react";
import cn from "../../util/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import { FaArrowCircleRight } from "react-icons/fa";

const CardHover = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 py-2 w-full mx-auto", className)}>
      {items.map((item, idx) => (
        <Link
          href={"/chat/" + item?.roomid}
          key={item?.roomid}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gray-900 block rounded-md"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="flex">
            <CardTitle>{item.title}</CardTitle>
            <CardSubTitle>{item.roomid}</CardSubTitle>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CardHover;

const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-sm flex justify-between items-center h-full w-full p-2 overflow-hidden bg-[#0b0b0b] border border-gray-600 group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2 text-md sm:text-lg">{children}</div>
      </div>
      <p className="text-2xl text-gray-300 mr-2">
        <FaArrowCircleRight />
      </p>
    </div>
  );
};

const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-white font-bold font-RobotoMono tracking-wide mt-2 text-md sm:text-xl",
        className
      )}
    >
      {children}
    </h4>
  );
};

const CardSubTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-gray-400 font-regular font-RobotoMono tracking-wide mt-1 text-sm sm:text-lg text-ellipsis text-ellipsis line-clamp-1 max-w-[150px] sm:max-w-auto",
        className
      )}
    >
      {children}
    </h4>
  );
};
