import React from 'react';
import Image from 'next/image';
import GlobeImage from '@/assets/image/globe.png';
import { FiBriefcase } from 'react-icons/fi';
import { GoOrganization } from 'react-icons/go';
import { FiSearch } from 'react-icons/fi';
import { FiStar } from 'react-icons/fi';

const Seekers = () => {
    const stats = [
        {
            icon: <FiBriefcase className="w-5 h-5 text-gray-400" />,
            number: "50K",
            label: "Active Jobs"
        },
        {
            icon: <GoOrganization className="w-5 h-5 text-gray-400" />,
            number: "12K",
            label: "Companies"
        },
        {
            icon: <FiSearch className="w-5 h-5 text-gray-400" />,
            number: "2M",
            label: "Job Seekers"
        },
        {
            icon: <FiStar className="w-5 h-5 text-gray-400" />,
            number: "97%",
            label: "Satisfication Rate"
        }
    ];

    return (
        <section className="w-full bg-[#000000] text-white pt-24 pb-32 px-4 md:px-12 overflow-hidden relative flex flex-col items-center justify-center min-h-[750px]">
            
            {/* ১. টপ ব্যাকগ্রাউন্ড: টেক্সটের পেছনের পার্পল রেডিয়াল গ্লো */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.45)_0%,rgba(0,0,0,0)_65%)] pointer-events-none z-0"></div>

            {/* ২. মাঝখানের মূল টেক্সট/শিরোনাম */}
            <div className="relative z-20 text-center max-w-3xl mx-auto mb-12 px-4">
                <h2 className="text-3xl md:text-[42px] font-normal tracking-tight text-gray-200 leading-tight">
                    Assisting over <span className="text-white font-medium">15,000 job seekers</span> <br className="hidden sm:block"/>
                    find their dream positions.
                </h2>
            </div>

            {/* ৩. নিচের ৪টি স্ট্যাটস কার্ড কন্টেইনার */}
            <div className="relative z-20 w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                {stats.map((stat, index) => (
                    <div 
                        key={index}
                        className="bg-[#090a0c]/90 border border-gray-900/80 backdrop-blur-md p-6 rounded-2xl flex flex-col justify-between h-44 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)] hover:border-gray-800/80 transition-all duration-300"
                    >
                        <div className="w-10 h-10 bg-[#121316] rounded-xl flex items-center justify-center border border-gray-800/40">
                            {stat.icon}
                        </div>

                        <div className="mt-4">
                            <h3 className="text-4xl font-bold tracking-tight text-white">
                                {stat.number}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1 font-medium">
                                {stat.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* ৪. বটম ব্যাকগ্রাউন্ড: গ্লোব ইমেজ (একদম নিচে পারফেক্টলি সেট করা) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl opacity-90 pointer-events-none mix-blend-screen select-none z-10 translate-y-[45%]">
                {/* গ্লোবের নিজস্ব পেছনের ব্লু নিয়ন লাইট ইফেক্ট */}
                <div className="absolute inset-0 bg-blue-600/30 blur-[130px] rounded-full scale-90"></div>
                
                <Image 
                    src={GlobeImage} 
                    alt="Globe background" 
                    width={1000} 
                    height={1000} 
                    priority
                    className="w-full h-auto object-contain mx-auto"
                />
            </div>

        </section>
    );
};

export default Seekers;