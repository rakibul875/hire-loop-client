"use client";

import React from 'react';
import { Button, Card } from '@heroui/react';

const PlanLimitModal = ({ onUpgradeClick }) => {
    return (
        <div className="flex justify-center items-center w-full min-h-screen p-4 sm:p-6 bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
            <Card className="w-full max-w-md border border-white/20 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden p-8 text-center transition-all duration-300 hover:shadow-danger/5">
                
                {/* Visual Icon/Badge */}
                <div className="mx-auto w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-danger-50 dark:bg-danger-950/30 text-danger animate-pulse">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2} 
                        stroke="currentColor" 
                        className="w-8 h-8"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                </div>

                {/* Content */}
                <span className="text-xs font-bold tracking-wider uppercase text-danger px-2.5 py-1 bg-danger-100/50 dark:bg-danger-950/50 rounded-full">
                    Limit Reached
                </span>
                
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-50 mt-4 mb-2">
                    Free Plan Ended!
                </h2>
                
                <p className="text-sm font-medium text-slate-500 dark:text-zinc-400 mb-8 leading-relaxed">
                    আপনার ফ্রি প্ল্যানের লিমিট শেষ হয়ে গেছে। Heire Loop-এ আনলিমিটেড জব অ্যাপ্লাই এবং প্রিমিয়াম ফিচারগুলো ব্যবহার করতে এখনই আপনার প্ল্যানটি আপগ্রেড করুন।
                </p>

                {/* Upgrade Button */}
                <Button 
                    onClick={onUpgradeClick}
                    color="danger" 
                    size="lg"
                    radius="lg"
                    className="font-bold text-sm tracking-wide bg-gradient-to-r from-danger to-pink-600 hover:opacity-95 shadow-lg shadow-danger/20 dark:shadow-none transition-transform active:scale-[0.98] w-full"
                >
                    Upgrade Plan Now
                </Button>

                {/* Secondary Go Back Link/Button (Optional) */}
                <button 
                    onClick={() => window.history.back()} 
                    className="mt-4 text-xs font-semibold text-slate-400 hover:text-slate-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
                >
                    Go Back To Dashboard
                </button>

            </Card>
        </div>
    );
};

export default PlanLimitModal;