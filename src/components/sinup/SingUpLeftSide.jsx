import React from 'react';
import { FiSliders, FiShield, FiCheckCircle } from 'react-icons/fi';
import { LuTrendingUp } from 'react-icons/lu';

const SingUpLeftSide = () => {
    return (
        <div className="hidden lg:flex w-1/2 bg-[#090a0c] relative flex-col justify-center p-16 xl:p-24 overflow-hidden min-h-screen border-r border-gray-950/40 select-none">
            
            {/* ==================== ব্যাকগ্রাউন্ড লাইট ও সার্কেল ইফেক্ট ==================== */}
            {/* উপরের হালকা গোলাকার ছটা */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,255,255,0.015)_0%,rgba(0,0,0,0)_70%)] pointer-events-none rounded-full" />
            {/* নিচের হালকা গোলাকার ছটা */}
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.012)_0%,rgba(0,0,0,0)_70%)] pointer-events-none rounded-full" />


            {/* ==================== মূল কন্টেন্ট এরিয়া ==================== */}
            <div className="relative z-10 max-w-lg flex flex-col items-start">
                
                {/* ১. টপ ব্যাজ (Professional Excellence) */}
                <div className="inline-flex items-center gap-1.5 bg-[#121316] border border-gray-900 px-3.5 py-1.5 rounded-full text-[11px] font-medium tracking-wide text-gray-300 mb-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
                    <FiCheckCircle className="text-gray-400 w-3.5 h-3.5" />
                    <span>Professional Excellence</span>
                </div>

                {/* ২. মেইন হেডিং */}
                <h1 className="text-3xl xl:text-4xl font-bold tracking-tight text-white mb-6 leading-[1.2]">
                    Accelerate your career with elite opportunities.
                </h1>

                {/* ৩. সাব-ডেসক্রিপশন */}
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-12">
                    Hireloop is the premier platform connecting high-performance professionals with the world`s most innovative companies. Join 500k+ users leveraging data-driven job matching.
                </p>


                {/* ৪. ফিচার লিস্ট গ্রুপ */}
                <div className="space-y-8 w-full">
                    
                    {/* ফিচার ১: Data-Driven Insights */}
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#111215] border border-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
                            <LuTrendingUp className="w-4 h-4 text-gray-300" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-sm font-semibold text-gray-200">
                                Data-Driven Insights
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed max-w-[340px]">
                                Access real-time salary benchmarks and company growth metrics.
                            </p>
                        </div>
                    </div>

                    {/* ফিচার ২: Curated Matches */}
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#111215] border border-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
                            <FiShield className="w-4 h-4 text-gray-300" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-sm font-semibold text-gray-200">
                                Curated Matches
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed max-w-[340px]">
                                Our algorithm surfaces roles that align with your unique skill set and ambitions.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default SingUpLeftSide;