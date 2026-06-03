"use client";
import React from "react";
import { motion } from "framer-motion";

import { HiOutlineDocumentText } from "react-icons/hi2";
import { FiUsers, FiActivity, FiCheckCircle } from "react-icons/fi";
import StatCard from "./StatCard";

const StatsGrid = () => {
  const stats = [
    {
      icon: <HiOutlineDocumentText className="w-5 h-5 text-gray-400" />,
      label: "Total Job Posts",
      value: "48",
    },
    {
      icon: <FiUsers className="w-5 h-5 text-gray-400" />,
      label: "Total Applicants",
      value: "1,284",
    },
    {
      icon: <FiActivity className="w-5 h-5 text-gray-400" />,
      label: "Active Jobs",
      value: "18",
    },
    {
      icon: <FiCheckCircle className="w-5 h-5 text-gray-400" />,
      label: "Jobs Closed",
      value: "32",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
    >
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          icon={stat.icon}
          label={stat.label}
          value={stat.value}
        />
      ))}
    </motion.div>
  );
};

export default StatsGrid;
