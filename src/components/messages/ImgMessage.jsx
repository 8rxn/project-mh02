import React from "react";

function ImgMessage({ name, src, time, text, me }) {
  // console.log(text)
  const isMe = name === me;
  return (
    <div
      className={`flex items-start gap-2.5 ${
        isMe ? "justify-end" : "justify-start"
      }`}
    >
      <div className="flex flex-col gap-1">
        <div
          className={`flex flex-col w-full max-w-[300px] sm:max-w-[500px] leading-1.5 p-4 border-gray-200 rounded-b-xl ${
            isMe ? "rounded-l-xl bg-[#95A4FC]" : "rounded-r-xl bg-[#E5ECF6]"
          }`}
        >
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span
              className={`text-[14px] font-bold line-clamp-1 text-ellipsis ${
                isMe ? "text-white" : "text-gray-900"
              }`}
            >
              {name}
            </span>
            <span
              className={`text-[12px] ${isMe ? "text-white" : "text-gray-800"}`}
            >
              {time}
            </span>
          </div>
          <p
            className={`text-sm font-normal text-[14px] py-1 font-RobotoMono text-gray-900 ${
              isMe ? "text-white" : "text-gray-900"
            }`}
          >
            {text}{" "}
          </p>
          <a className="group relative my-2.5" href={src} target="__blank" >
            <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
            </div>
            <img src={src} alt="image-to-download" className="w-full object-cover rounded-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ImgMessage;
