import NotJobSeeker from "@/components/NotJobSeeker";
import { getJobsById } from "@/lib/action/api/companyData";
import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";
import React from "react";
import JobApplyFrom from "./JobApplyFrom";
import { getApplication } from "@/lib/action/api/getApplication";

const ApplyPage = async ({ params }) => {
  const { id } = await params;
  const user = await getUserSession();
  const plan = {
    name: "Free plan",
    maxApplicationParMonth: 3,
  };
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
  const application = await getApplication(user?.id);
  const job = await getJobsById(id);

  return (
    <div>
      <h1>
        {user?.name} You Applied so fa {application.length} of{" "}
        {plan.maxApplicationParMonth} this month{" "}
      </h1>
      {application.length<plan.maxApplicationParMonth &&<JobApplyFrom applicant={user} job={job} />}
    </div>
  );
};

export default ApplyPage;
