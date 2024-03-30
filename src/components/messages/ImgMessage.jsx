import React from "react";

function ImgMessage({ src }) {
  return (
    <div className="flex items-start gap-2.5">
      <div className="flex flex-col gap-1">
        <div className="flex flex-col w-full max-w-[326px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-es-xl bg-[#E5ECF6]">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-[16px] font-semibold text-gray-900">
              Assistant
            </span>
            <span className="text-[12px] font-normal text-gray-800">12:40</span>
          </div>
          <p className="text-sm font-normal text-[14px] py-1  font-Gabarito text-gray-900">
            This is the new office{" "}
          </p>
          <div className="group relative my-2.5">
            <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <button
                data-tooltip-target="download-image"
                className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/50 focus:ring-4 focus:outline-none text-gray-900 focus:ring-gray-50"
              >
                <svg
                  className="w-5 h-5 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                  />
                </svg>
              </button>
              <div
                id="download-image"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300  rounded-lg shadow-sm opacity-0 tooltip bg-gray-800"
              >
                Download image
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <img src={src} alt="samle" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImgMessage;
