"use client";

import React from 'react';
import { Button, Card } from '@heroui/react';
import Link from 'next/link';

const UnauthorizedPage = () => {
    return (
        <div className="flex justify-center items-center w-full min-h-screen p-4 sm:p-6 bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-black transition-colors duration-300">
            <Card className="w-full max-w-md border border-white/20 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden p-8 text-center transition-all duration-300 hover:shadow-warning/5">
                
                {/* Lock Shield Icon Container */}
                <div className="mx-auto w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-amber-50 dark:bg-amber-950/30 text-amber-500 border border-amber-200 dark:border-amber-800/30 shadow-lg shadow-amber-500/10">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2} 
                        stroke="currentColor" 
                        className="w-7 h-7 animate-pulse"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v-6.75a2.25 2.25 0 002.25-2.25z" />
                    </svg>
                </div>

                {/* Status Code / Badge */}
                <span className="text-xs font-bold tracking-widest uppercase text-amber-600 dark:text-amber-400 px-3 py-1 bg-amber-100/50 dark:bg-amber-950/40 rounded-full">
                    401 - Unauthorized
                </span>
                
                {/* Title */}
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-50 mt-4 mb-2">
                    Access Denied!
                </h1>
                
                {/* Subtitle Message */}
                <p className="text-sm font-medium text-slate-500 dark:text-zinc-400 mb-8 leading-relaxed">
                    এই পেজটি দেখার জন্য আপনার কাছে প্রয়োজনীয় পারমিশন বা অনুমতি নেই। অনুগ্রহ করে সঠিক অ্যাকাউন্ট দিয়ে লগইন করুন অথবা হোমপেজে ফিরে যান।
                </p>

                <hr className="border-slate-100 dark:border-zinc-800/80 my-5 w-full" />

                {/* Secure Action Links */}
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <Link href="/" className="w-full select-none" prefetch={false}>
                        <Button 
                            variant="flat"
                            size="lg"
                            radius="lg"
                            className="font-bold text-sm tracking-wide bg-slate-100 dark:bg-zinc-800/50 hover:bg-slate-200 dark:hover:bg-zinc-800 w-full"
                        >
                            Back to Home
                        </Button>
                    </Link>

                    <Link href="/login" className="w-full select-none" prefetch={false}>
                        <Button 
                            color="primary" 
                            size="lg"
                            radius="lg"
                            className="font-bold text-sm tracking-wide bg-gradient-to-r from-primary to-primary-600 hover:opacity-95 shadow-lg shadow-primary/20 dark:shadow-none transition-transform active:scale-[0.98] w-full text-white"
                        >
                            Log In
                        </Button>
                    </Link>
                </div>

            </Card>
        </div>
    );
};

export default UnauthorizedPage;