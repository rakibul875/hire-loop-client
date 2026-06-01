"use client"; 
import React from "react";
import Image from "next/image";
import GlobeImage from "@/assets/image/globe.png";
import { FiBriefcase, FiSearch, FiStar } from "react-icons/fi";
import { GoOrganization } from "react-icons/go";
import { motion } from "framer-motion"; 
const Seekers = () => {
  const stats = [
    {
      icon: <FiBriefcase className="w-5 h-5 text-gray-400" />,
      number: "50K",
      label: "Active Jobs",
    },
    {
      icon: <GoOrganization className="w-5 h-5 text-gray-400" />,
      number: "12K",
      label: "Companies",
    },
    {
      icon: <FiSearch className="w-5 h-5 text-gray-400" />,
      number: "2M",
      label: "Job Seekers",
    },
    {
      icon: <FiStar className="w-5 h-5 text-gray-400" />,
      number: "97%",
      label: "Satisfaction Rate", 
    },
  ];

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, 
      },
    },
  };

  
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-[#000000] text-white pt-32 pb-24 px-4 md:px-12 overflow-hidden relative flex flex-col items-center justify-center min-h-[700px]">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.35)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 0.9, 
          scale: 1,
          rotate: 360 
        }}
        transition={{
          opacity: { duration: 1.5, ease: "easeOut" },
          scale: { duration: 1.5, ease: "easeOut" },
          rotate: { duration: 120, repeat: Infinity, ease: "linear" } 
        }}
        className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] md:w-[110%] max-w-7xl pointer-events-none mix-blend-screen select-none z-10"
      >

        <div className="absolute inset-0 bg-blue-600/25 blur-[120px] rounded-full scale-75 translate-y-10"></div>

        <Image
          src={GlobeImage}
          alt="Globe background"
          width={1200}
          height={1200}
          priority
          className="w-full h-auto object-contain mx-auto"
        />
      </motion.div>


      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-20 text-center max-w-3xl mx-auto mb-16 px-4"
      >
        <h2 className="text-3xl md:text-[40px] font-normal tracking-tight text-gray-200 leading-tight">
          Assisting over{" "}
          <span className="text-white font-medium">15,000 job seekers</span>{" "}
          <br className="hidden sm:block" />
          find their dream positions.
        </h2>
      </motion.div>


      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-20 w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03, 
              y: -5,
              borderColor: "rgba(156, 163, 175, 0.3)", 
              boxShadow: "0 15px 30px -10px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.06)"
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#07080a]/85 border border-gray-900/90 backdrop-blur-md p-6 rounded-2xl flex flex-col justify-between h-40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)] transition-all duration-300 cursor-pointer"
          >
           
            <motion.div 
              whileHover={{ rotate: 8, scale: 1.05 }}
              className="w-9 h-9 bg-[#111215] rounded-xl flex items-center justify-center border border-gray-800/40"
            >
              {stat.icon}
            </motion.div>

            <div className="mt-3">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                {stat.number}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mt-0.5 font-medium">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Seekers;