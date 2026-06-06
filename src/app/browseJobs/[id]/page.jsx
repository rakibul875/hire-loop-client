import JobDetailsClient from "@/components/JobDetailsClient";
import { getJobsById } from "@/lib/action/api/companyData";
import React from "react";
const JobsDetails = async ({ params }) => {
  const { id } = await params;
  const job = await getJobsById(id);

  if (!job) {
    return (
      <div className="min-h-screen bg-[#000000] text-white flex items-center justify-center">
        <p className="text-gray-400 text-lg">Job details not found.</p>
      </div>
    );
  }

  return <JobDetailsClient job={job} />;
};

export default JobsDetails;
