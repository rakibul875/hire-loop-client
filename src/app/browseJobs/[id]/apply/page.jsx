import NotJobSeeker from "@/components/NotJobSeeker";
import { getJobsById } from "@/lib/action/api/companyData";
import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";
import React from "react";
import JobApplyFrom from "./JobApplyFrom";
import { getApplication } from "@/lib/action/api/getApplication";
import PlanLimitModal from "@/components/PlanLimitModal";
import { getPlanById } from "@/lib/action/api/plans";

const ApplyPage = async ({ params }) => {
  const { id } = await params;
  const user = await getUserSession();
  const plan = await getPlanById(user?.plan || "seeker_free");
  console.log({ plan, id, user, role: user.role }, "form apply page");

  if (!user) {
    redirect(`/signin?redirect=/browseJobs/${id}/apply`);
  }
  if (user?.role !== "seeker") {
    console.log("not seeker");
    return (
      <div className="">
        <NotJobSeeker />
      </div>
    );
  }
  const application = await getApplication(user?.id);
  const job = await getJobsById(id);
  console.log({length:application.length ,planLength: plan.maxApplicationPerMonth}, "max session");
  return (
    <div>
      <h1>
        {user?.name} You Applied so fa {application.length} of{" "}
        {plan.maxApplicationPerMonth} this month{" "}
      </h1>

      {application.length < plan.maxApplicationPerMonth ? (
        <JobApplyFrom applicant={user} job={job} />
      ) : (
        <PlanLimitModal />
      )}
    </div>
  );
};

export default ApplyPage;
