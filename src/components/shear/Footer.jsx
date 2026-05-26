import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/image/logo.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
 
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Job discovery", path: "#" },
        { name: "Worker AI", path: "#" },
        { name: "Companies", path: "#" },
        { name: "Salary data", path: "#" },
      ],
    },
    {
      title: "Navigations",
      links: [
        { name: "Help center", path: "#" },
        { name: "Career library", path: "#" },
        { name: "Contact", path: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Brand Guideline", path: "#" },
        { name: "Newsroom", path: "#" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#000000] text-gray-400 px-6 md:px-16 pt-16 pb-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 pb-12">
        <div className="md:col-span-5 flex flex-col gap-5">
          <div className="flex items-center">
            <Image
              src={Logo}
              alt="Programming Hero Logo"
              height={40}
              width={160}
              className="object-contain"
            />
          </div>
          <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
            The AI-native career platform. Built for people who take their work
            seriously.
          </p>
        </div>

        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {footerSections.map((section, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="text-indigo-500 font-semibold text-base tracking-wide">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.path}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-950 pt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-9 h-9 bg-[#111214] hover:bg-gray-800 rounded-lg flex items-center justify-center text-white transition-colors"
          >
            <FaFacebook size={18} />
          </a>

          <a
            href="#"
            className="w-9 h-9 bg-indigo-600 hover:bg-indigo-700 rounded-lg flex items-center justify-center text-white transition-colors"
          >
            <span className="font-bold text-sm">P</span>
          </a>
          <a
            href="#"
            className="w-9 h-9 bg-[#111214] hover:bg-gray-800 rounded-lg flex items-center justify-center text-white transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs text-gray-500 text-center sm:text-right">
          <p>Copyright 2024 — Programming Hero</p>
          <div className="hidden sm:block h-3 w-[1px] bg-gray-800"></div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Terms & Policy
            </Link>
            <span>-</span>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
