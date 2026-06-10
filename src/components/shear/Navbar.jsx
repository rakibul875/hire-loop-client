"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/image/logo.png";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { LoginAvater } from "../LoginAvater";
import { Button } from "@heroui/react";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handelLogOut = async () => {
    await authClient.signOut();
  };
  const navLinks = [
    { title: "Browse Jobs", path: "/browseJobs" },
    { title: "Company", path: "/company" },
    { title: "Pricing", path: "/pricing" },
  ];
  //   const pathName={
  //     seeker:'/dashboard/seeker',
  //     recruiter:'/dashboard/recruiter'
  // }
  const rolePaths = {
    seeker: "/dashboard/seeker",
    recruiter: "/dashboard/recruiter",
    admin: "/dashboard/admin",
  };
  if (user?.email) {
    navLinks.push({
      title: "Dashboard",
      // path: pathName[user?.role || "seeker"]
      path: rolePaths[user?.role] ?? "/dashboard",
    });
  }

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
            if (!link.path) return null;

            const isActive = pathname === link.path;

            return (
              <Link
                key={index}
                href={link.path}
                className={isActive ? "text-white" : "text-gray-400"}
              >
                {link.title}
              </Link>
            );
          })}
        </div>

        <div className="h-5 w-[1px] bg-gray-700/60 mx-1"></div>

        <div className="flex items-center gap-6">
          {user ? (
            <div className="flex items-center gap-2">
              <LoginAvater user={user} />
              <Button onClick={handelLogOut}>LogOut</Button>
            </div>
          ) : (
            <Link
              href="/signin"
              className="text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors"
            >
              Sign In
            </Link>
          )}
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
            if (!link.path) return null;

            const isActive = pathname === link.path;

            return (
              <Link
                key={index}
                href={link.path}
                className={isActive ? "text-white" : "text-gray-400"}
              >
                {link.title}
              </Link>
            );
          })}

          <div className="h-[1px] bg-gray-800 my-1"></div>
          <li>
            {user ? (
              <div className="flex items-center gap-2">
                <LoginAvater user={user} />
                <Button onClick={handelLogOut}>LogOut</Button>
              </div>
            ) : (
              <Link
                href="/signin"
                className="text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors"
              >
                Sign In
              </Link>
            )}
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
