import React from "react";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row w-full justify-around items-center border-t-1 border-t-gray-700 py-20 gap-5 bg-[#0b0b0b]" id="Contact">
      <div className="flex flex-col items-center sm:items-start">
        <a
          className="font-RobotoMono text-3xl sm:text-5xl text-white flex justify-center items-center gap-2"
          href="/"
        >
          <img src="/logo.png" alt="logo" className="w-[40px] sm:w-[60px]" />
          <p>WeaveChat</p>
        </a>
        <p className="font-light font-RobotoMono text-lg text-gray-400">by Team zkBuilders</p>
        <p className="font-light font-RobotoMono text-lg text-gray-400">
          Built at{" "}
          <a href="https://ethmumbai.in/" target="__blank">
            EthMumbai
          </a>
        </p>
      </div>
      <div className="flex flex-col items-center sm:items-start text-gray-200 font-RobotoMono">
        <a href="/">GitHub</a>
        <a href="https://twitter.com/Anushrxy" target="__blank">
          Anushrey
        </a>
        <a href="https://twitter.com/mlaikofta" target="__blank">
          Raj
        </a>
        <a href="https://twitter.com/_sirsimon_" target="__blank">
          Anmol
        </a>
      </div>
    </div>
  );
}

export default Footer;
