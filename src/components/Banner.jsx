import React from 'react';
import { FiSearch, FiMapPin, FiBriefcase } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';

const Banner = () => {
    return (
        <section className="w-full bg-[#000000] text-white pt-24 pb-20 px-4 md:px-12 flex flex-col items-center justify-center relative overflow-hidden min-h-[650px]">
            
            {/* ব্যাকগ্রাউন্ড লাইটিং ইফেক্ট (ইমেজের টপ-লেফট এবং রাইটের ডার্ক শ্যাডো ও গ্লো মেইনটেইন করার জন্য) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0"></div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                
                {/* ১. টপ ব্যাজ (50,000+ New Jobs This Month) */}
                <div className="inline-flex items-center gap-2 bg-[#141517] border border-gray-800/60 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-gray-400 mb-8 shadow-md">
                    <FiBriefcase className="text-amber-600 w-3.5 h-3.5" />
                    <span className="text-white font-semibold">50,000+</span> NEW JOBS THIS MONTH
                </div>

                {/* ২. মেইন হেডিং (Find Your Dream Job Today) */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
                    Find Your Dream Job Today
                </h1>

                {/* ৩. সাব-হেডলাইন বা ডেসক্রিপশন */}
                <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed mb-12 px-2">
                    HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
                </p>

                {/* ৪. সার্চ বার কন্টেইনার (সম্পূর্ণ রেসপন্সিভ ইমেজের মতো ইনপুট ফিল্ড) */}
                <div className="w-full max-w-3xl bg-[#0d0e10]/90 border border-gray-800/80 rounded-2xl md:rounded-full p-2 flex flex-col md:flex-row items-center gap-3 md:gap-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md mb-8">
                    
                    {/* প্রথম ইনপুট: Job Title */}
                    <div className="w-full flex items-center px-4 py-2 gap-3 md:border-r md:border-gray-800/80">
                        <FiSearch className="text-gray-500 w-5 h-5 flex-shrink-0" />
                        <input 
                            type="text" 
                            placeholder="Job title, skill or company"
                            className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-gray-600"
                        />
                    </div>

                    {/* দ্বিতীয় ইনপুট: Location */}
                    <div className="w-full flex items-center px-4 py-2 gap-3">
                        <FiMapPin className="text-gray-500 w-5 h-5 flex-shrink-0" />
                        <input 
                            type="text" 
                            placeholder="Location or Remote"
                            className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-gray-600"
                        />
                    </div>

                    {/* সার্চ বাটন (ইমেজের মতো পার্পল কালার ও রাউন্ডেড শেপ) */}
                    <button className="w-full md:w-auto bg-[#4f46e5] hover:bg-[#4338ca] text-white p-3.5 rounded-xl md:rounded-full flex items-center justify-center md:px-6 transition-all active:scale-95 flex-shrink-0 shadow-lg shadow-indigo-600/20">
                        <IoSearchOutline className="w-5 h-5" />
                    </button>
                </div>

                {/* ৫. ট্রেন্ডিং পজিশন ট্যাগসমূহ */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
                    <span className="text-gray-500 font-medium mr-1">Trending Position</span>
                    <span className="bg-[#111214] border border-gray-800/60 px-4 py-1.5 rounded-full text-gray-400 hover:text-white hover:border-gray-700 cursor-pointer transition-colors">
                        Product Designer
                    </span>
                    <span className="bg-[#111214] border border-gray-800/60 px-4 py-1.5 rounded-full text-gray-400 hover:text-white hover:border-gray-700 cursor-pointer transition-colors">
                        AI Engineering
                    </span>
                    <span className="bg-[#111214] border border-gray-800/60 px-4 py-1.5 rounded-full text-gray-400 hover:text-white hover:border-gray-700 cursor-pointer transition-colors">
                        Dev-ops Engineer
                    </span>
                </div>

            </div>
        </section>
    );
};

export default Banner;