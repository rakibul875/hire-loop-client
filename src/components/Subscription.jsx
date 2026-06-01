"use client"; 
import React from "react";
import Image from "next/image";
import BgImage from "@/assets/image/cta-bg.png";
import { motion } from "framer-motion"; 

const Subscription = () => {
  
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }, 
    },
  };

  return (
    <section className="w-full bg-[#000000] text-white py-32 px-4 md:px-12 relative overflow-hidden flex flex-col items-center justify-center min-h-[600px] select-none">
      

      <motion.div 
        initial={{ opacity: 0.6, scale: 0.95 }}
        animate={{ 
          opacity: [0.6, 0.85, 0.6], 
          scale: [0.95, 1.02, 0.95] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-[20%] md:top-[15%] left-1/2 -translate-x-1/2 w-[160%] md:w-[120%] max-w-7xl pointer-events-none select-none z-0"
      >
   
        <div className="absolute inset-0 bg-blue-600/20 blur-[130px] rounded-full scale-75 translate-y-10"></div>

        <Image
          src={BgImage}
          alt="Grid curved background"
          width={1400}
          height={1400}
          priority
          className="w-full h-auto object-contain mx-auto mix-blend-screen"
        />
      </motion.div>


      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center"
      >
        
        <motion.h2 
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-[54px] font-bold tracking-tight text-white mb-6 leading-[1.15] max-w-2xl"
        >
          Your next role is <br /> already looking for you
        </motion.h2>

        
        <motion.p 
          variants={itemVariants}
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed mb-10 px-2"
        >
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </motion.p>

        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
       
          <motion.button 
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 font-semibold px-7 py-3.5 rounded-xl text-sm transition-colors shadow-lg shadow-white/5"
          >
            Create a free account
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.03, y: -2, borderColor: "rgba(255, 255, 255, 0.2)", backgroundColor: "rgba(20, 22, 27, 0.8)" }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto bg-[#0d0e11]/40 border border-gray-800/80 text-gray-300 hover:text-white px-7 py-3.5 rounded-xl text-sm transition-colors backdrop-blur-sm"
          >
            View pricing
          </motion.button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Subscription;