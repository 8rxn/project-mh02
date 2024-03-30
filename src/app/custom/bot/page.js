"use client";
import { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai"; // Importing the copy icon from React Icons
import NavBar from "../../../components/navbar/NavBar";
import Footer from "../../../components/footer/Footer";
import { Tooltip } from "@nextui-org/react";

export default function Page() {
  const [copied, setCopied] = useState(false);

  const codeContent = `{
  \n  "text": "Here's the latest update on Ethereum (eth) trading with the Indian Rupee (INR): The current price of eth stands at ₹305354.0. This value marks a slight change from the opening price of ₹302006.6. Today, Ethereum experienced a high of ₹305354.6 and a low of ₹300000.0. In the trading session, the volume of ETH traded was 26.5358 eth. If you're looking to sell Ethereum, the current asking price is ₹305354.0, while buying orders are being placed at around ₹305029.8. This data gives you an insight into the market's recent trends and helps inform your trading decisions.",
  \n  "from": "@crypto-bot",
  \n  "image": "https://api.liteseed.xyz/data/4238ffda-545c-4007-b017-e3edabecd5f8"
  \n}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeContent).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    });
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col items-center bg-[#0b0b0b] font-RobotoMono mt-16 sm:mt-24 px-5">
        <p className="text-2xl md:text-4xl text-center text-white mb-3 md:mb-6">
          Guide: Create a Custom Chat Room
        </p>
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-start sm:items-center gap-2">
            <div className="text-white text-sm translate-y-1 sm:translate-y-0 sm:text-xl flex items-center justify-center rounded-full border-white border-1 w-[20px] sm:w-[40px] h-[20px] sm:h-[40px]">
              <p>1</p>
            </div>
            <div className="text-lg text-white max-w-[200px] sm:max-w-full">Give the Bot a name</div>
          </div>
          <div className="flex items-start sm:items-center gap-2">
            <div className="text-white text-sm translate-y-1 sm:translate-y-0 sm:text-xl flex items-center justify-center rounded-full border-white border-1 w-[20px] sm:w-[40px] h-[20px] sm:h-[40px]">
              <p>2</p>
            </div>
            <div className="text-lg text-white max-w-[200px] sm:max-w-full">
              Submit a description for the Chat Room
            </div>
          </div>
          <div className="flex items-start sm:items-center gap-2">
            <div className="text-white text-sm hover:chaipenenk translate-y-1 sm:translate-y-0 sm:text-xl flex items-center justify-center rounded-full border-white border-1 w-[20px] sm:w-[40px] h-[20px] sm:h-[40px]">
              <p>3</p>
            </div>
            <div className="text-lg text-white max-w-[200px] sm:max-w-full">
              Submit a JSON
            </div>
          </div>
          <p className="text-white text-lg">Sample JSON:</p>
          <div className="text-white bg-[#0e0e0e] rounded-md p-8 max-w-[300px] md:max-w-lg relative">
            <Tooltip content="copy to clipboard">
              <button
                className="absolute top-2 right-2 bg-[rgb(149, 164, 252)] text-white px-2 py-1 rounded"
                onClick={copyToClipboard}
              >
                {copied ? "Copied!" : <AiOutlineCopy />}
              </button>
            </Tooltip>
            <pre className="overflow-x-scroll custom-scrollbar">
              <code>{codeContent}</code>
            </pre>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
