'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

const NotJobSeeker = () => {
    return (
        <div>
            <div className="min-h-[80vh] w-full bg-[#000000] text-white flex flex-col items-center justify-center px-4 relative overflow-hidden select-none">

      <div className="absolute w-[350px] h-[350px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="text-center max-w-md relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-14 h-14 bg-[#131518] border border-gray-900 rounded-2xl flex items-center justify-center mb-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
        >
          <svg
            className="w-6 h-6 text-purple-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
              d="M12 15v2m0 0v2m0-2h2m-2 0H10m4-6V7a4 4 0 10-8 0v4m0 0v5a2 2 0 002 2h8a2 2 0 002-2v-5a2 2 0 00-2-2H6z"
            />
          </svg>
        </motion.div>

       
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl sm:text-2xl font-medium tracking-tight text-gray-200 mb-2"
        >
          Access Restricted
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed mb-8 max-w-xs"
        >
          This page is exclusively for Job Seekers. Recruiters cannot view or apply to these roles.
        </motion.p>

      
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full sm:w-auto"
        >
          <Link href="/dashboard" className="w-full block">
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#f3f4f6" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-white text-black font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              Go back to Dashboard
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </div>
        </div>
    );
};

export default NotJobSeeker;