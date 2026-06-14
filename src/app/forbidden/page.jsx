"use client";

import React from 'react';
import { Button, Card } from '@heroui/react';
import Link from 'next/link';

const ForbiddenPage = () => {
    return (
        <div className="flex justify-center items-center w-full min-h-screen p-4 sm:p-6 bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-black transition-colors duration-300">
            <Card className="w-full max-w-md border border-white/20 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden p-8 text-center transition-all duration-300 hover:shadow-danger/5">
                
                {/* Shield Alert Icon Container */}
                <div className="mx-auto w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-rose-50 dark:bg-rose-950/30 text-rose-500 border border-rose-200 dark:border-rose-800/30 shadow-lg shadow-rose-500/10">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2} 
                        stroke="currentColor" 
                        className="w-7 h-7 animate-pulse"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                    </svg>
                </div>

                {/* Status Code / Badge */}
                <span className="text-xs font-bold tracking-widest uppercase text-rose-600 dark:text-rose-400 px-3 py-1 bg-rose-100/50 dark:bg-rose-950/40 rounded-full">
                    403 - Forbidden
                </span>
                
                {/* Title */}
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-50 mt-4 mb-2">
                    Access Forbidden
                </h1>
                
                {/* Subtitle Message */}
                <p className="text-sm font-medium text-slate-500 dark:text-zinc-400 mb-8 leading-relaxed">
                    আপনার এই ডিরেক্টরি বা সার্ভার জোনে ঢোকার কোনো অনুমতি নেই। এই আইপি বা রিকোয়েস্টটি এডমিন প্যানেল দ্বারা সুরক্ষিত।
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

                    <Link href="/dashboard" className="w-full select-none" prefetch={false}>
                        <Button 
                            color="danger" 
                            size="lg"
                            radius="lg"
                            className="font-bold text-sm tracking-wide bg-gradient-to-r from-rose-500 to-rose-600 hover:opacity-95 shadow-lg shadow-rose-500/20 dark:shadow-none transition-transform active:scale-[0.98] w-full text-white"
                        >
                            My Dashboard
                        </Button>
                    </Link>
                </div>

            </Card>
        </div>
    );
};

export default ForbiddenPage;