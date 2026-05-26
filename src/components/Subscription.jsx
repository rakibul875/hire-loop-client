import React from "react";
import Image from "next/image";
import BgImage from "@/assets/image/cta-bg.png";

const Subscription = () => {
  return (
    <section className="w-full bg-[#000000] text-white py-32 px-4 md:px-12 relative overflow-hidden flex flex-col items-center justify-center min-h-[600px]">
      <div className="absolute top-[20%] md:top-[15%] left-1/2 -translate-x-1/2 w-[160%] md:w-[120%] max-w-7xl opacity-85 pointer-events-none select-none z-0">
        <div className="absolute inset-0 bg-blue-600/20 blur-[130px] rounded-full scale-75 translate-y-10"></div>

        <Image
          src={BgImage}
          alt="Grid curved background"
          width={1400}
          height={1400}
          priority
          className="w-full h-auto object-contain mx-auto mix-blend-screen"
        />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-[54px] font-bold tracking-tight text-white mb-6 leading-[1.15] max-w-2xl">
          Your next role is <br /> already looking for you
        </h2>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed mb-10 px-2">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 font-semibold px-7 py-3.5 rounded-xl text-sm transition-all active:scale-95 shadow-lg shadow-white/5">
            Create a free account
          </button>

          <button className="w-full sm:w-auto bg-[#0d0e11]/40 hover:bg-[#14161b]/60 border border-gray-800/80 text-gray-300 hover:text-white px-7 py-3.5 rounded-xl text-sm transition-all active:scale-95 backdrop-blur-sm">
            View pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
