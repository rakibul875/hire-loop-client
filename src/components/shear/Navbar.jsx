"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from '@/assets/image/logo.png'
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { title: "Browse Jobs", path: "/jobs" },
    { title: "Company", path: "/company" },
    { title: "Pricing", path: "/pricing" },
  ];

  return (
    <nav className="w-full bg-transparent text-white px-4 md:px-12 py-4 flex items-center justify-between sticky top-0 z-50">
      
      <div className="flex items-center flex-shrink-0">
        <Image
          src={Logo}
          alt="Hire Loop Logo"
          height={40} 
          width={160} 
          className="object-contain"
          priority 
        />
      </div>

   
      <div className="hidden md:flex items-center ml-auto gap-6">
        <div className="flex items-center bg-[#1c1d20]/80 px-6 py-2.5 rounded-xl border border-gray-800/50 gap-8 text-sm font-medium">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={index}
                href={link.path}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.title}

                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white rounded-full animate-fadeIn" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="h-5 w-[1px] bg-gray-700/60 mx-1"></div>

        <div className="flex items-center gap-6">
          <Link
            href="/signin"
            className="text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors"
          >
            Sign In
          </Link>
          <button className="bg-white text-black font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-gray-200 active:scale-95 transition-all shadow-[0_4px_14px_rgba(255,255,255,0.15)]">
            Get Started
          </button>
        </div>
      </div>

      <div className="dropdown dropdown-end md:hidden">
        <button
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle text-gray-400 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-[#1c1d20] border border-gray-800 rounded-box w-52 gap-2 text-gray-300"
        >
          {navLinks.map((link, index) => {
            const isActive = pathname === link.path;
            return (
              <li key={index}>
                <Link
                  href={link.path}
                  className={
                    isActive ? "text-white font-semibold bg-gray-800" : ""
                  }
                >
                  {link.title}
                </Link>
              </li>
            );
          })}

          <div className="h-[1px] bg-gray-800 my-1"></div>
          <li>
            <Link href="/signin" className="text-indigo-400">
              Sign In
            </Link>
          </li>
          <li className="mt-1">
            <button className="bg-white text-black font-semibold py-2 rounded-xl text-center hover:bg-gray-200 w-full">
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;