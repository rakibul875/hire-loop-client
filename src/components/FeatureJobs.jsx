import React from "react";
import { FiSearch, FiBookmark } from "react-icons/fi";
import { BiTrendingUp } from "react-icons/bi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TbClick, TbFileText, TbHexagon, TbTrendingUp } from "react-icons/tb";

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

  return (
    <section className="w-full bg-[#0a0a0a] text-white py-24 px-4 sm:px-8 md:px-16 flex flex-col items-center">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-[2px]"></span>
        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
          FEATURES JOB
        </span>
        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-[2px]"></span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-center tracking-tight text-white mb-20 max-w-xl leading-tight">
        Everything you need <br /> to succeed
      </h2>

      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4 group">
            <div className="w-12 h-12 bg-[#111111] border border-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] group-hover:border-gray-800 transition-all duration-300">
              {feature.icon}
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-base font-medium text-gray-200 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed max-w-[220px]">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureJobs;
