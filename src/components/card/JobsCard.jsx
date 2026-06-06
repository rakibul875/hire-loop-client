"use client";

import React from "react";
import { MapPin, DollarSign } from "lucide-react";
import Link from "next/link";
import { BiSolidShoppingBags } from "react-icons/bi";
import Image from "next/image";
import { motion } from "framer-motion";


const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1]
    },
  },
};

const JobsCard = ({ job }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden" 
      animate="visible" 
      whileHover={{
        y: -6, 
        borderColor: "rgba(255, 255, 255, 0.08)",
        backgroundColor: "rgba(23, 26, 30, 0.95)",
        boxShadow: "0 30px 60px -15px rgba(0,0,0,0.9), inset 0 1px 1px rgba(255,255,255,0.03)",
      }}
      className="bg-[#131518]/90 border border-gray-900/60 rounded-xl overflow-hidden h-full flex flex-col backdrop-blur-sm transition-colors duration-300 select-none"
    >

      <div className="px-5 py-3.5 flex items-center gap-3 border-b border-gray-900/60 bg-[#0c0d0f]/40">
        <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#1a1c20] border border-gray-800/40 flex-shrink-0 relative">
          <Image
            src={job.companyLogo}
            alt={`${job.companyName} logo`}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <h1 className="text-lg font-medium text-white tracking-tight truncate">
          {job.companyName}
        </h1>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-xl font-medium tracking-tight text-white mb-2 line-clamp-1">
          {job.title}
        </h2>

        <p
          className="text-xs sm:text-sm text-gray-400 mb-5 leading-relaxed overflow-hidden font-light"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {job.responsibilities}
        </p>

      
        <div className="space-y-3 mb-6 flex-1">
          <div className="flex items-center gap-3 flex-wrap text-gray-400">
            <div className="flex items-center gap-1.5 bg-[#17191d] border border-gray-800/40 px-2.5 py-1 rounded-md">
              <MapPin className="w-3.5 h-3.5 text-gray-500 shrink-0" />
              <span className="text-xs font-light">{job.location}</span>
            </div>

            <div className="flex items-center gap-1.5 bg-[#17191d] border border-gray-800/40 px-2.5 py-1 rounded-md">
              <BiSolidShoppingBags className="w-3.5 h-3.5 text-gray-500 shrink-0" />
              <span className="text-xs font-light capitalize">{job.jobType}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-gray-300 bg-[#17191d]/50 border border-gray-900/60 w-fit px-2.5 py-1 rounded-md">
            <DollarSign className="w-3.5 h-3.5 text-gray-500 shrink-0" />
            <span className="text-xs font-medium tracking-wide">
              {job.salary}/month
            </span>
          </div>
        </div>
        <Link href={`/browseJobs/${job._id}`} className="mt-auto w-full block">
          <motion.button
            whileHover={{ 
              scale: 1.01,
              backgroundColor: "#f3f4f6"
            }}
            whileTap={{ scale: 0.99 }}
            className="w-full bg-white text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm shadow-md cursor-pointer"
          >
            <span>Apply Now</span>
            <span className="text-xs font-normal">→</span>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default JobsCard;