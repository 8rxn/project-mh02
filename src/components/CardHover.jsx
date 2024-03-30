'use client'
import React, { useState } from "react";
import cn from "../../util/cn"
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import { FaArrowCircleRight } from "react-icons/fa";


const CardHover = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 py-2 w-full mx-auto",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gray-800 block rounded-md"
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
        "rounded-sm flex justify-between items-center h-full w-full p-2 overflow-hidden bg-black border border-gray-600 group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
      <p className="text-2xl text-gray-300 mr-2">
      <FaArrowCircleRight/>
      </p>
    </div>
  );
};

const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-white font-bold tracking-wide mt-2 text-xl", className)}>
      {children}
    </h4>
  );
};

const CardSubTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-gray-400 font-regular tracking-wide mt-1", className)}>
      {children}
    </h4>
  );
};

const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};