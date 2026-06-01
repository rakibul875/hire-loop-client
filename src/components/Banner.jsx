"use client";
import React, { useState, useEffect } from "react";
import { FiSearch, FiMapPin, FiBriefcase } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { motion, animate, useMotionValue, useTransform } from "framer-motion"; 

const Banner = () => {
  // ১. যে শব্দগুলো একের পর এক টাইপ হয়ে আসবে
  const words = ["Dream Job", "Remote Work", "Future Career"];
  const [wordIndex, setWordIndex] = useState(0);
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => words[wordIndex].slice(0, latest));
  
  useEffect(() => {

    const controls = animate(count, words[wordIndex].length, {
      type: "tween",
      duration: 1.5, 
      ease: "easeInOut",
      onComplete: () => {
       
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
          count.set(0);
        }, 2000);
      },
    });
    return controls.stop;
  }, [wordIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }, 
    },
  };

  return (
    <section className="w-full bg-[#000000] text-white pt-24 pb-20 px-4 md:px-12 flex flex-col items-center justify-center relative overflow-hidden min-h-[650px]">
      <motion.div 
        initial={{ opacity: 0.3, scale: 0.9 }}
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [0.9, 1.05, 0.9] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0"
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
      >
      
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-[#141517] border border-gray-800/60 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-gray-400 mb-8 shadow-md"
        >
          <FiBriefcase className="text-amber-600 w-3.5 h-3.5" />
          <span className="text-white font-semibold">50,000+</span> NEW JOBS THIS MONTH
        </motion.div>

       
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.2] max-w-3xl min-h-[120px] sm:min-h-[auto]"
        >
          Find Your <br className="sm:hidden" />
          
          
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-[0_2px_10px_rgba(168,85,247,0.2)]">
            <motion.span>{displayText}</motion.span>
            
            
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
              className="inline-block w-[3px] h-[35px] sm:h-[50px] md:h-[55px] bg-purple-400 ml-1 translate-y-1 sm:translate-y-2"
            />
          </span> 
          <br className="hidden sm:block" /> Easily Today
        </motion.h1>

       
        <motion.p 
          variants={itemVariants}
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed mb-12 px-2"
        >
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </motion.p>

       
        <motion.div 
          variants={itemVariants}
          className="w-full max-w-3xl bg-[#0d0e10]/90 border border-gray-800/80 rounded-2xl md:rounded-full p-2 flex flex-col md:flex-row items-center gap-3 md:gap-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md mb-8"
        >
          <div className="w-full flex items-center px-4 py-2 gap-3 md:border-r md:border-gray-800/80">
            <FiSearch className="text-gray-500 w-5 h-5 flex-shrink-0" />
            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-gray-600"
            />
          </div>

          <div className="w-full flex items-center px-4 py-2 gap-3">
            <FiMapPin className="text-gray-500 w-5 h-5 flex-shrink-0" />
            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-gray-600"
            />
          </div>

          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full md:w-auto bg-[#4f46e5] hover:bg-[#4338ca] text-white p-3.5 rounded-xl md:rounded-full flex items-center justify-center md:px-6 transition-colors flex-shrink-0 shadow-lg shadow-indigo-600/20"
          >
            <IoSearchOutline className="w-5 h-5" />
          </motion.button>
        </motion.div>

      
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm"
        >
          <span className="text-gray-500 font-medium mr-1">
            Trending Position
          </span>
          
          {["Product Designer", "AI Engineering", "Dev-ops Engineer"].map((tag, i) => (
            <motion.span 
              key={i}
              whileHover={{ scale: 1.05, y: -2, backgroundColor: "#16171a", borderColor: "#4b5563" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#111214] border border-gray-800/60 px-4 py-1.5 rounded-full text-gray-400 hover:text-white cursor-pointer transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Banner;