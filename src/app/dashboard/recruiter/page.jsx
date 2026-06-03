// 'use client'

// import StatCard from '@/components/dashboardComponents/StatCard';
// import { useSession } from '@/lib/auth-client';
// import React from 'react';

// const RecruiterHomePage = () => {
//     const {data:session, isPending}=useSession()
//     const user= session?.user
//     if(isPending){
//         return <div>Loading....</div>
//     }
//     return (
//         <div className=''>
//             <div className="">
//                 <h1 className='text-3xl'>Welcome Back {user?.name}</h1>
//                 <StatCard/>
//             </div>
//         </div>
//     );
// };

// export default RecruiterHomePage;
'use client';

import { useSession } from '@/lib/auth-client';
import React from 'react';
import { motion } from 'framer-motion';// নতুন গ্রিড কম্পোনেন্টটি ইম্পোর্ট করুন
import StatsGrid from '@/components/dashboardComponents/StatsGrid';

const RecruiterHomePage = () => {
  const { data: session, isPending } = useSession();
  const user = session?.user;

  if (isPending) {
    return (
      <div className="min-h-screen bg-[#000000] flex items-center justify-center">
        <motion.div 
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-gray-400 text-sm font-medium tracking-widest"
        >
          LOADING DASHBOARD...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#000000] text-white pt-12 pb-24 px-4 sm:px-8 md:px-12 select-none relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-2xl sm:text-3xl font-normal tracking-tight text-gray-200">
            Welcome back,{" "}
            <span className="text-white font-medium">
              {user?.name || "Alex Sterling"}
            </span>
          </h1>
        </motion.div>

       
        <StatsGrid />

        <div className="mt-5 flex justify-between">
            <h1 className='text-xl'>Recent Applications</h1>
            <p className='text-slate-500'>View All</p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 w-full min-h-[300px] border border-gray-900/60 bg-[#07080a]/40 rounded-2xl backdrop-blur-sm flex items-center justify-center p-6"
        >
          {/* <p className="text-sm text-gray-600 font-light tracking-wide">
            Applicant pipeline and active overview grids will populate here.
          </p> */}
        </motion.div>

      </div>
    </div>
  );
};

export default RecruiterHomePage;