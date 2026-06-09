"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa6";
import { FiEye, FiEyeOff, FiImage } from "react-icons/fi";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { redirect, useRouter, useSearchParams } from "next/navigation";


const SingUP = () => {
  const [role, setRole] = useState("seeker");
  const [showPassword, setShowPassword] = useState(false);
  const searchParams=useSearchParams()
  const redirectTo=searchParams.get('redirect')||'/'
  const router= useRouter()

  const handelSignUp = async (e) => {
    e.preventDefault();
    const userData = new FormData(e.currentTarget);
    userData.set("role", role);
    const plan=role==='seeker'? 'seeker_free': 'recruiter_free'
    const user = Object.fromEntries(userData.entries());
    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      image: user.image,
      password: user.password,
      role: user.role,
      plan: plan
    });

    if (data) {
      alert("signUp successful");
      router.push(redirectTo)
    } else {
      console.error(error?.message);
    }
  };

  return (
    <div className="w-full lg:w-1/2 bg-[#090a0c] flex flex-col items-center justify-center p-6 sm:p-12 md:p-20 min-h-screen">
      <div className="w-full max-w-[420px] flex flex-col">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-2">
          Create your account
        </h2>
        <p className="text-sm text-gray-500 font-light mb-8">
          Start your professional journey today.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            type="button"
            className="flex items-center justify-center gap-2 bg-[#111215]/50 border border-gray-900 rounded-xl py-2.5 px-4 text-xs font-medium text-gray-300 hover:bg-[#16171c] hover:border-gray-800 transition-all"
          >
            <FaLinkedin className="text-[#0a66c2] w-4 h-4" />
            <span>LinkedIn</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 bg-[#111215]/50 border border-gray-900 rounded-xl py-2.5 px-4 text-xs font-medium text-gray-300 hover:bg-[#16171c] hover:border-gray-800 transition-all"
          >
            <FcGoogle className="w-4 h-4" />
            <span>Google</span>
          </button>
        </div>

        <div className="flex items-center my-4 w-full">
          <div className="flex-1 border-t border-gray-900"></div>
          <span className="px-3 text-[10px] uppercase font-semibold tracking-wider text-gray-600">
            or register with email
          </span>
          <div className="flex-1 border-t border-gray-900"></div>
        </div>

        <form onSubmit={handelSignUp} className="space-y-5 mt-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-gray-400">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              className="w-full bg-[#111215]/40 border border-gray-900 focus:border-gray-800/80 rounded-xl py-3 px-4 text-sm text-white placeholder-gray-750 outline-none transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)] focus:bg-[#111215]/80"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-gray-400">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="name@company.com"
              className="w-full bg-[#111215]/40 border border-gray-900 focus:border-gray-800/80 rounded-xl py-3 px-4 text-sm text-white placeholder-gray-750 outline-none transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)] focus:bg-[#111215]/80"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-gray-400">
              Photo URL
            </label>
            <div className="relative w-full">
              <input
                name="image"
                type="url"
                placeholder="https://example.com/your-photo.jpg"
                className="w-full bg-[#111215]/40 border border-gray-900 focus:border-gray-800/80 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-gray-750 outline-none transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)] focus:bg-[#111215]/80"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none">
                <FiImage className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-gray-400">
              Password
            </label>
            <div className="relative w-full">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full bg-[#111215]/40 border border-gray-900 focus:border-gray-800/80 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-gray-750 outline-none transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)] focus:bg-[#111215]/80"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-400 transition-colors"
              >
                {showPassword ? (
                  <FiEyeOff className="w-4 h-4" />
                ) : (
                  <FiEye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

        
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-gray-400">
              Subscription plan
            </label>

            <div className="flex items-center gap-6 mt-1">
             
              <label className="flex items-center gap-2 cursor-pointer select-none text-sm text-gray-300">
                <input
                  type="radio"
                  name="seeker"
                  value="seeker"
                  checked={role === "seeker"}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-4 h-4 rounded-full border-gray-700 bg-[#111215] text-white focus:ring-0 focus:ring-offset-0 accent-blue-500 cursor-pointer"
                />
                <span>Seeker</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer select-none text-sm text-gray-300">
                <input
                  type="radio"
                  name="recruiter"
                  value="recruiter"
                  checked={role === "recruiter"}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-4 h-4 rounded-full border-gray-700 bg-[#111215] text-white focus:ring-0 focus:ring-offset-0 accent-blue-500 cursor-pointer"
                />
                <span>Recruiter</span>
              </label>
            </div>
          </div>

          <div className="flex items-start gap-2.5 pt-1">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 rounded border-gray-900 bg-[#111215] text-white focus:ring-0 focus:ring-offset-0 accent-white cursor-pointer mt-0.5"
            />
            <label
              htmlFor="terms"
              className="text-xs text-gray-500 font-light select-none cursor-pointer leading-normal"
            >
              I agree to the{" "}
              <a
                href="#"
                className="text-gray-400 hover:text-white underline transition-colors"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-gray-400 hover:text-white underline transition-colors"
              >
                Privacy Policy
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black hover:bg-gray-100 font-semibold py-3 rounded-xl text-sm transition-all active:scale-[0.99] mt-2 shadow-lg shadow-white/5"
          >
            Create Account
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-8 font-light">
          Already have an account?{" "}
          <Link
            href={`/signin?redirect=${redirectTo}`}
            className="text-gray-300 hover:text-white font-semibold transition-colors"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SingUP;