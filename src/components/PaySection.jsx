"use client";
import React, { useState } from "react";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { FaCrown, FaBolt } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";

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

  return (
    <section className="w-full bg-[#000000] text-white py-24 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden relative">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-[2px]"></span>
        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
          PRICING
        </span>
        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-[2px]"></span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-[42px] font-normal text-center tracking-tight text-white mb-10 max-w-2xl leading-tight">
        Pay for the leverage, <br /> not the listings
      </h2>

      <div className="bg-[#141517] p-1 rounded-full flex items-center mb-16 border border-gray-900 shadow-md relative z-20">
        <button
          onClick={() => setBillingCycle("monthly")}
          className={`px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
            billingCycle === "monthly"
              ? "bg-white text-black shadow-lg font-semibold"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle("yearly")}
          className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
            billingCycle === "yearly"
              ? "bg-white text-black shadow-lg font-semibold"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <span>Yearly</span>
          <span className="bg-pink-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
            25%
          </span>
        </button>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-3xl p-8 flex flex-col justify-between border transition-all duration-300 min-h-[480px] ${
              plan.isPopular
                ? "bg-[#0b0c0e] border-gray-800/80 shadow-[0_20px_40px_rgba(0,0,0,0.7)] scale-102"
                : "bg-[#040405] border-gray-900/60 shadow-md"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#121316] border border-gray-800/50 rounded-lg flex items-center justify-center">
                    {plan.icon}
                  </div>
                  <span className="text-base sm:text-lg font-medium text-gray-200">
                    {plan.name}
                  </span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-3xl sm:text-4xl font-bold text-white">
                    ${plan.price}
                  </span>
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
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-gray-500 font-light"
                  >
                    <FiPlus className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <button
                className={`w-full py-3.5 px-5 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                  plan.isPopular
                    ? "bg-white text-black hover:bg-gray-100 font-semibold shadow-md"
                    : "bg-[#1b1c1f] text-gray-300 hover:bg-[#25272a] hover:text-white border border-gray-800/40"
                }`}
              >
                <span>Choose This Plan</span>
                <FiArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaySection;
