import React from "react";
import { getApplication } from "@/lib/action/api/getApplication";
import { getUserSession } from "@/lib/core/session";
import ApplicationTable from "@/components/seeker/ApplicationTable";

const SeekerApplicationPage = async () => {
  const user = await getUserSession();
  const applications = (await getApplication(user?.id)) || [];

  return (
    <div className="w-full min-h-screen p-4 sm:p-8 bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-zinc-50">
              My Applications
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-zinc-500 font-medium">
              Manage and track your applied corporate job profiles.
            </p>
          </div>
          <div className="text-xs font-bold text-primary bg-primary-100/50 dark:bg-primary-950/40 px-3 py-1.5 rounded-full border border-primary-200/20">
            Total Submitted: {applications.length}
          </div>
        </div>

        <ApplicationTable applications={applications} />
      </div>
    </div>
  );
};

export default SeekerApplicationPage;
