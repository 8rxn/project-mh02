import React from "react";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row w-full justify-around items-center border-t-1 border-t-gray-700 py-20 gap-5">
      <div className="flex flex-col">
        <p className="font-bold font-Gabarito text-3xl sm:text-5xl text-white">
          WeaveChat
        </p>
        <p className="font-light text-lg text-gray-400">by Team zkBuilders</p>
        <p className="font-light text-lg text-gray-400">
          Built at{" "}
          <a href="https://ethmumbai.in/" target="__blank">
            EthMumbai
          </a>
        </p>
      </div>
      <div className="flex flex-col items-center sm:items-start text-gray-200 font-Poppins">
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