"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMapPin, FiBriefcase, FiCalendar, FiDollarSign } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const JobDetailsClient = ({ job }) => {
  const {
    title,
    companyName,
    category,
    jobType,
    salary,
    currency,
    location,
    date,
    responsibilities,
    requirements,
    benefits,
    companyLogo,
  } = job;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="w-full min-h-screen bg-[#000000] text-white py-20 px-4 sm:px-8 md:px-16 relative overflow-hidden select-none">

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/5 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
  
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-[#07080a]/80 border border-gray-900 backdrop-blur-md p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
        >
          <div className="flex items-center gap-5">
       
            <div className="w-16 h-16 bg-[#111215] border border-gray-800 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0">
              {companyLogo ? (
                <img src={companyLogo} alt={companyName} className="w-full h-full object-cover" />
              ) : (
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-gray-500" />
              )}
            </div>

            <div>
              <h1 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-1.5">
                {title}
              </h1>
              <p className="text-sm text-gray-400 flex items-center gap-2">
                <span className="text-gray-300 font-medium">{companyName}</span>
                <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                <span className="capitalize text-xs bg-indigo-600/10 text-indigo-400 px-2.5 py-0.5 rounded-full font-medium">
                  {jobType}
                </span>
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 font-semibold px-6 py-3 rounded-xl text-sm transition-colors shadow-lg"
          >
            Apply for this position
          </motion.button>
        </motion.div>

       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
           
            <div className="bg-[#040405] border border-gray-900/60 p-6 sm:p-8 rounded-3xl">
              <h3 className="text-lg font-medium text-white mb-4 tracking-tight">Requirements</h3>
              <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed whitespace-pre-line">
                {requirements}
              </p>
            </div>

            
            <div className="bg-[#040405] border border-gray-900/60 p-6 sm:p-8 rounded-3xl">
              <h3 className="text-lg font-medium text-white mb-4 tracking-tight">Responsibilities</h3>
              <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed whitespace-pre-line">
                {responsibilities}
              </p>
            </div>

            <div className="bg-[#040405] border border-gray-900/60 p-6 sm:p-8 rounded-3xl">
              <h3 className="text-lg font-medium text-white mb-4 tracking-tight">Benefits & Perks</h3>
              <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed whitespace-pre-line">
                {benefits}
              </p>
            </div>
          </motion.div>

         
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-[#07080a]/85 border border-gray-900 backdrop-blur-md p-6 rounded-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
              <h3 className="text-base font-medium text-white mb-5 pb-3 border-b border-gray-900">
                Job Overview
              </h3>

              <div className="space-y-4">
         
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 bg-[#111215] border border-gray-800/60 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Location</p>
                    <p className="text-sm text-gray-300 mt-0.5">{location}</p>
                  </div>
                </div>

             
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 bg-[#111215] border border-gray-800/60 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiDollarSign className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Salary</p>
                    <p className="text-sm text-gray-300 mt-0.5 capitalize">
                      {salary}K / <span className="uppercase">{currency}</span>
                    </p>
                  </div>
                </div>

              
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 bg-[#111215] border border-gray-800/60 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiBriefcase className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Category</p>
                    <p className="text-sm text-gray-300 mt-0.5 capitalize">{category}</p>
                  </div>
                </div>

               
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 bg-[#111215] border border-gray-800/60 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiCalendar className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Date Posted</p>
                    <p className="text-sm text-gray-300 mt-0.5">{date}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default JobDetailsClient;