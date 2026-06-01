"use client";
import React, { useState } from "react";
import { FiPlus as FiPlusIcon, FiArrowRight as FiArrowRightIcon } from "react-icons/fi";
import { FaCrown, FaBolt } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion"; // Framer Motion ইমপোর্ট করা হলো

const PaySection = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      icon: <FaCrown className="w-4 h-4 text-pink-500" />,
      price: billingCycle === "monthly" ? 0 : 0,
      subtitle: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      isPopular: false,
    },
    {
      name: "Growth",
      icon: <GoGraph className="w-4 h-4 text-purple-400" />,
      price: billingCycle === "monthly" ? 17 : 12,
      subtitle: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      isPopular: true,
    },
    {
      name: "Premium",
      icon: <FaBolt className="w-4 h-4 text-purple-500" />,
      price: billingCycle === "monthly" ? 99 : 79,
      subtitle: "Start building your insights hub:",
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
      isPopular: false,
    },
  ];

  // কার্ডগুলোর জন্য অ্যানিমেশন ভ্যারিয়েন্ট
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-[#000000] text-white py-24 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden relative select-none">
      
      {/* ব্যাকগ্রাউন্ড রেডিয়াল গ্লো ইফেক্ট */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0" />

      {/* টপ ব্যাজ */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 mb-4 relative z-10"
      >
        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-[2px]"></span>
        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
          PRICING
        </span>
        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-[2px]"></span>
      </motion.div>

      {/* হেডিং */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-[42px] font-normal text-center tracking-tight text-white mb-10 max-w-2xl leading-tight relative z-10"
      >
        Pay for the leverage, <br /> not the listings
      </motion.h2>

      {/* ডাইনামিক টগল বাটন (স্মুথ স্লাইডারসহ) */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-[#141517] p-1 rounded-full flex items-center mb-16 border border-gray-900 shadow-md relative z-20"
      >
        {/* Monthly Button */}
        <button
          onClick={() => setBillingCycle("monthly")}
          className={`px-6 py-2 rounded-full text-xs sm:text-sm font-medium relative transition-colors duration-300 ${
            billingCycle === "monthly" ? "text-black font-semibold" : "text-gray-400 hover:text-white"
          }`}
        >
          <span className="relative z-10">Monthly</span>
          {billingCycle === "monthly" && (
            <motion.div 
              layoutId="activeTab" 
              className="absolute inset-0 bg-white rounded-full z-0 shadow-lg"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </button>

        {/* Yearly Button */}
        <button
          onClick={() => setBillingCycle("yearly")}
          className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium relative transition-colors duration-300 flex items-center gap-2 ${
            billingCycle === "yearly" ? "text-black font-semibold" : "text-gray-400 hover:text-white"
          }`}
        >
          <span className="relative z-10 flex items-center gap-2">
            <span>Yearly</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors ${
              billingCycle === "yearly" ? "bg-pink-600 text-white" : "bg-pink-600/10 text-pink-500"
            }`}>
              25%
            </span>
          </span>
          {billingCycle === "yearly" && (
            <motion.div 
              layoutId="activeTab" 
              className="absolute inset-0 bg-white rounded-full z-0 shadow-lg"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </button>
      </motion.div>

      {/* কার্ড গ্রিড */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              y: -8,
              scale: plan.isPopular ? 1.03 : 1.02,
              borderColor: plan.isPopular ? "rgba(99, 102, 241, 0.4)" : "rgba(255, 255, 255, 0.1)",
              boxShadow: plan.isPopular 
                ? "0 30px 60px -15px rgba(0,0,0,0.9), 0 0 50px -10px rgba(99, 102, 241, 0.15)" 
                : "0 30px 60px -15px rgba(0,0,0,0.8)"
            }}
            className={`rounded-3xl p-8 flex flex-col justify-between border transition-all duration-300 min-h-[480px] ${
              plan.isPopular
                ? "bg-[#0b0c0e] border-gray-800/80 shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
                : "bg-[#040405] border-gray-900/60 shadow-md"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <motion.div 
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="w-8 h-8 bg-[#121316] border border-gray-800/50 rounded-lg flex items-center justify-center"
                  >
                    {plan.icon}
                  </motion.div>
                  <span className="text-base sm:text-lg font-medium text-gray-200">
                    {plan.name}
                  </span>
                </div>
                
                {/* প্রাইস অ্যামাউন্ট চেঞ্জ হওয়ার স্মুথ অ্যানিমেশন */}
                <div className="flex items-baseline">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={plan.price}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="text-3xl sm:text-4xl font-bold text-white"
                    >
                      ${plan.price}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-[10px] text-gray-500 font-medium ml-1">
                    /{billingCycle === "monthly" ? "month" : "month"}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-medium text-gray-300 mb-5">
                {plan.subtitle}
              </p>

              <ul className="space-y-3.5">
                {plan.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-start gap-3 text-xs sm:text-sm text-gray-500 font-light"
                  >
                    <FiPlusIcon className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 px-5 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                  plan.isPopular
                    ? "bg-white text-black hover:bg-gray-100 font-semibold shadow-md"
                    : "bg-[#1b1c1f] text-gray-300 hover:bg-[#25272a] hover:text-white border border-gray-800/40"
                }`}
              >
                <span>Choose This Plan</span>
                <FiArrowRightIcon className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PaySection;