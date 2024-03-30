import React from "react";

export function GridBackground({ children }) {
  return (
    <div className="min-h-[100vh] w-full bg-[#0b0b0b] bg-grid-white/[0.07] relative flex justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#0b0b0b] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-[#0b0b0b]">
        {children}
      </div>
    </div>
  );
}

export function GridSmallBackground({ children }) {
  return (
    <div className="h-[50rem] w-full bg-[#0b0b0b] bg-grid-small-white/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none -z-40 inset-0 flex items-center justify-center bg-[#0b0b0b] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}
