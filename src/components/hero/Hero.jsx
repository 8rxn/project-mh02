import React from "react";
import { GridBackground } from "./GridBackground";
import { ConnectButton } from "arweave-wallet-kit";

export default function Hero() {
  return (
    <GridBackground>
      <div className="h-[65%] flex flex-col items-center justify-center text-center gap-2 sm:gap-4 mt-10">
        <div className="flex max-w-[95%] sm:max-w-auto text-3xl sm:text-4xl lg:text-6xl font-Gabarito font-bold">
          <p className="text-white">
            <span className="text-blue-500">WeaveChat:</span> Elevating Customer
            Support!
          </p>
        </div>
        <p className="max-w-lg font-Poppins text-sm sm:text-lg md:text-2xl text-gray-400">
          Enhance Support:
          <br /> Decentralized Chat + AI Assistant!
        </p>
        <Button>
          <ConnectButton
            accent="transparent"
            profileModal={true}
            showBalance={false}
          >
            Connect Wallet
          </ConnectButton>
        </Button>
      </div>
    </GridBackground>
  );
}

const Button = ({ children }) => {
  return (
    <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-md p-px text-sm sm:text-lg font-semibold leading-6  text-white inline-block">
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-md bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative flex space-x-0 items-center z-10 rounded-md bg-zinc-950 ring-1 ring-white/10 px-4">
        <span>{children}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10.75 8.75L14.25 12L10.75 15.25"
          ></path>
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </button>
  );
};
