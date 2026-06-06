import React from "react";
import { MapPin, DollarSign } from "lucide-react";
import Link from "next/link";
import { BiSolidShoppingBags } from "react-icons/bi";
import Image from "next/image";

const JobsCard = ({ job }) => {
  return (
    <div className="bg-[#131518] border border-gray-900/60 rounded-xl overflow-hidden h-full flex flex-col">
      <div className="px-5 py-3 flex items-center gap-3 border-b border-gray-900/60">
        <Image
          src={job.companyLogo}
          alt="logo"
          height={40}
          width={40}
          className="rounded-xl"
        />
        <h1 className="text-xl font-semibold text-white">{job.companyName}</h1>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-2xl font-semibold text-white mb-1.5">
          {job.title}
        </h2>

        <p
          className="text-sm text-slate-300 mb-4 leading-relaxed overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {job.responsibilities}
        </p>

        <div className="space-y-3 mb-5 flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <MapPin className="w-4 h-4 text-gray-500 shrink-0" />
            <span className="text-sm text-slate-300">{job.location}</span>

            <BiSolidShoppingBags className="w-4 h-4 text-gray-500 shrink-0" />

            <span className="text-sm text-slate-300">{job.jobType}</span>
          </div>

          <div className="flex items-center gap-3">
            <DollarSign className="w-4 h-4 text-gray-500 shrink-0" />
            <span className="text-sm text-slate-300">{job.salary}/month</span>
          </div>
        </div>

        <Link
          href={`/browseJobs/${job._id}`}
          className="mt-auto w-full bg-white border border-gray-300 text-gray-700 font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
        >
          Apply Now →
        </Link>
      </div>
    </div>
  );
};

export default JobsCard;
