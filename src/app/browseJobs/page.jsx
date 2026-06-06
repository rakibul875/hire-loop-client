import JobsCard from "@/components/card/JobsCard";
import { getJobsData } from "@/lib/action/api/companyData";
import React from "react";

const AllJobsPage = async () => {
  const jobs = await getJobsData();

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch p-6 sm:p-2">
        {jobs.map((job) => (
          <JobsCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AllJobsPage;
