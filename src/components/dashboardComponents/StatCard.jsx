"use client";
import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

const StatCard = ({ icon, label, value }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        y: -4, 
        borderColor: "rgba(255, 255, 255, 0.08)",
        boxShadow: "0 20px 40px -15px rgba(0,0,0,0.8)"
      }}
      className="bg-[#0f1012]/70 border border-gray-900/80 backdrop-blur-md p-6 rounded-2xl flex flex-col justify-between h-40 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
    >
      <div className="w-9 h-9 bg-[#16171a] rounded-xl flex items-center justify-center border border-gray-800/40 shadow-sm">
        {icon}
      </div>

      <div className="mt-4">
        <p className="text-[11px] sm:text-xs text-gray-500 font-medium tracking-wide uppercase">
          {label}
        </p>
        <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mt-1">
          {value}
        </h3>
      </div>
    </motion.div>
  );
};

export default StatCard;