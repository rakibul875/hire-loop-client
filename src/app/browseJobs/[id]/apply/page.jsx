import NotJobSeeker from "@/components/NotJobSeeker";
import { getJobsById } from "@/lib/action/api/companyData";
import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";
import React from "react";
import JobApplyFrom from "./JobApplyFrom";

const ApplyPage = async ({ params }) => {
  const { id } = await params;
  const user = await getUserSession();
  if (!user) {
    redirect(`/signin?redirect=/browseJobs/${id}/apply`);
  }
  if (user?.role !== "seeker") {
    return (
      <div className="">
        <NotJobSeeker />
      </div>
    );
  }
  const job= await getJobsById(id)
  
  return (
    <div>
      <JobApplyFrom applicant={user} job={job}/>
    </div>
  );
};

export default ApplyPage;
