"use client"
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaLinkedin } from 'react-icons/fa6';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const RightSide = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handelSignin=(e)=>{
        e.preventDefault()
        const user=new FormData(e.currentTarget)
        const userData= Object.fromEntries(user.entries())
        console.log(userData)
    }

    return (
        <div className="w-full lg:w-1/2 bg-[#090a0c] flex flex-col items-center justify-center p-6 sm:p-12 md:p-20 min-h-screen">
            
            <div className="w-full max-w-[420px] flex flex-col">
                
                <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-2">
                    Welcome Back
                </h2>
                <p className="text-sm text-gray-500 font-light mb-8">
                    Access your professional dashboard.
                </p>

               
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <button className="flex items-center justify-center gap-2 bg-[#111215]/50 border border-gray-900 rounded-xl py-2.5 px-4 text-xs font-medium text-gray-300 hover:bg-[#16171c] hover:border-gray-800 transition-all">
                        <FaLinkedin className="text-[#0a66c2] w-4 h-4" />
                        <span>LinkedIn</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-[#111215]/50 border border-gray-900 rounded-xl py-2.5 px-4 text-xs font-medium text-gray-300 hover:bg-[#16171c] hover:border-gray-800 transition-all">
                        <FcGoogle className="w-4 h-4" />
                        <span>Google</span>
                    </button>
                </div>

              
                <div className="flex items-center my-4 w-full">
                    <div className="flex-1 border-t border-gray-900"></div>
                    <span className="px-3 text-[10px] uppercase font-semibold tracking-wider text-gray-600">
                        or continue with email
                    </span>
                    <div className="flex-1 border-t border-gray-900"></div>
                </div>

                
                <form className="space-y-5 mt-4" onSubmit={handelSignin}>
                    
                 
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-medium text-gray-400">Email Address</label>
                        <input 
                            type="email" 
                            name='email'
                            placeholder="name@company.com" 
                            className="w-full bg-[#111215]/40 border border-gray-900 focus:border-gray-800/80 rounded-xl py-3 px-4 text-sm text-white placeholder-gray-700 outline-none transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)] focus:bg-[#111215]/80"
                        />
                    </div>

               
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <label className="text-xs font-medium text-gray-400">Password</label>
                            <a href="#" className="text-xs text-gray-400 hover:text-white font-medium transition-colors">
                                Forgot Password?
                            </a>
                        </div>
                        <div className="relative w-full">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="••••••••" 
                                name='password'
                                className="w-full bg-[#111215]/40 border border-gray-900 focus:border-gray-800/80 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-gray-700 outline-none transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)] focus:bg-[#111215]/80"
                            />
                            <button 
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-400 transition-colors"
                            >
                                {showPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>

                    
                    <div className="flex items-center gap-2.5 pt-1">
                        <input 
                            type="checkbox" 
                            id="remember"
                            className="w-4 h-4 rounded border-gray-900 bg-[#111215] text-white focus:ring-0 focus:ring-offset-0 accent-white cursor-pointer"
                        />
                        <label htmlFor="remember" className="text-xs text-gray-500 font-medium select-none cursor-pointer">
                            Keep me signed in for 30 days
                        </label>
                    </div>

                
                    <button 
                        type="submit" 
                        className="w-full bg-white text-black hover:bg-gray-100 font-semibold py-3 rounded-xl text-sm transition-all active:scale-[0.99] mt-2 shadow-lg shadow-white/5"
                    >
                        Sign In
                    </button>
                </form>

             
                <p className="text-xs text-gray-500 text-center mt-8 font-light">
                    Don`t have an account? <a href="#" className="text-gray-300 hover:text-white font-semibold transition-colors">Join Hireloop</a>
                </p>

            </div>

        </div>
    );
};

export default RightSide;