import React from "react";
import Image from "next/image";
import house from "@/assets/image/house.jpg";
import { FiTrendingUp } from "react-icons/fi";

const LeftSide = () => {
  return (
    <div className="hidden lg:flex w-1/2 bg-[#090a0c] relative flex-col justify-between p-16 overflow-hidden min-h-screen border-r border-gray-950">
      <div className="absolute inset-0 select-none z-0">
        <Image
          src={house}
          alt="House background"
          fill
          priority
          className="object-cover opacity-40 mix-blend-luminosity"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      </div>

      <div className="relative z-20"></div>

      <div className="absolute top-[28%] right-[15%] z-20 max-w-[220px] bg-[#111214]/60 border border-gray-800/40 backdrop-blur-xl p-4 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]">
        <div className="flex items-center gap-2 mb-2 text-gray-300">
          <FiTrendingUp className="w-4 h-4 text-gray-400" />
          <span className="text-[10px] font-bold tracking-wider uppercase">
            Live Insights
          </span>
        </div>
        <p className="text-[11px] text-gray-500 font-light leading-relaxed">
          Global workforce activity up{" "}
          <span className="text-gray-300 font-medium">12%</span> this quarter.
        </p>
      </div>

      <div className="relative z-20 max-w-md mt-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
          Elevate your career trajectory.
        </h1>
        <p className="text-gray-500 text-sm font-light leading-relaxed">
          Join a network of elite professionals and industry leaders using
          Hireloop to redefine the future of work.
        </p>
      </div>
    </div>
  );
};

export default LeftSide;
