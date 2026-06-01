

"use client";
import React from "react";
import { FiSearch, FiBookmark } from "react-icons/fi";
import { BiTrendingUp } from "react-icons/bi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TbClick, TbFileText, TbHexagon, TbTrendingUp } from "react-icons/tb";
import { motion } from "framer-motion";

const FeatureJobs = () => {
  const features = [
    {
      icon: <FiSearch className="w-5 h-5 text-purple-400" />,
      title: "Smart Search",
      desc: "Find your ideal job with advanced filters.",
    },
    {
      icon: <BiTrendingUp className="w-5 h-5 text-purple-400" />,
      title: "Salary Insights",
      desc: "Get real salary data to negotiate confidently.",
    },
    {
      icon: <HiOutlineBuildingOffice2 className="w-5 h-5 text-purple-400" />,
      title: "Top Companies",
      desc: "Apply to vetted companies that are hiring.",
    },
    {
      icon: <FiBookmark className="w-5 h-5 text-purple-400" />,
      title: "Saved Jobs",
      desc: "Manage apps & favorites on your dashboard.",
    },
    {
      icon: <TbClick className="w-5 h-5 text-purple-400" />,
      title: "One-Click Apply",
      desc: "Simplify your job applications for an easier process!",
    },
    {
      icon: <TbFileText className="w-5 h-5 text-purple-400" />,
      title: "Resume Builder",
      desc: "Create professional resumes with modern templates.",
    },
    {
      icon: <TbHexagon className="w-5 h-5 text-purple-400" />,
      title: "Skill-Based Matching",
      desc: "Discover jobs that match your skills and experience.",
    },
    {
      icon: <TbTrendingUp className="w-5 h-5 text-purple-400" />,
      title: "Career Growth Resources",
      desc: "Boost your career with quick interview tips.",
    },
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
      },
    },
  };


  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-[#0a0a0a] text-white py-24 px-4 sm:px-8 md:px-16 flex flex-col items-center select-none">
      
    
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-4"
      >
        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-[2px]"></span>
        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
          FEATURES JOB
        </span>
        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-[2px]"></span>
      </motion.div>

   
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl font-normal text-center tracking-tight text-white mb-20 max-w-xl leading-tight"
      >
        Everything you need <br /> to succeed
      </motion.h2>


      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }} 
        className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="flex items-start gap-4 group cursor-pointer"
          >
            
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(168, 85, 247, 0.4)", 
                boxShadow: "0 0 15px rgba(168, 85, 247, 0.15)"
              }}
              className="w-12 h-12 bg-[#111111] border border-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] transition-all duration-300"
            >
            
              <motion.div className="group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </motion.div>
            </motion.div>

       
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-medium text-gray-200 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed max-w-[220px]">
                {feature.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeatureJobs;