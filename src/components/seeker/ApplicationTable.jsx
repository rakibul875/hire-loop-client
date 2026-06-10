"use client";

import React from "react";
import { Card, Button, Chip } from "@heroui/react";

const ApplicationTable = ({ applications = [] }) => {
  if (applications.length === 0) {
    return (
      <Card className="p-8 text-center bg-zinc-900/50 border border-zinc-800 rounded-xl">
        <p className="text-sm font-medium text-zinc-500">
          No applications found.
        </p>
      </Card>
    );
  }

  const getStatusChip = (status) => {
    const currentStatus = status?.toLowerCase() || "applied";

    switch (currentStatus) {
      case "review":
        return (
          <Chip
            variant="bordered"
            className="border-amber-500/50 text-amber-500 text-[11px] h-6 font-semibold bg-transparent"
          >
            Review
          </Chip>
        );
      case "shortlisted":
        return (
          <Chip
            variant="bordered"
            className="border-emerald-500/50 text-emerald-500 text-[11px] h-6 font-semibold bg-transparent"
          >
            Shortlisted
          </Chip>
        );
      case "rejected":
        return (
          <Chip
            variant="bordered"
            className="border-rose-500/50 text-rose-500 text-[11px] h-6 font-semibold bg-transparent"
          >
            Rejected
          </Chip>
        );
      case "offered":
        return (
          <Chip
            variant="bordered"
            className="border-indigo-400/50 text-indigo-400 text-[11px] h-6 font-semibold bg-transparent"
          >
            Offered
          </Chip>
        );
      default:
        return (
          <Chip
            variant="bordered"
            className="border-zinc-400/50 text-zinc-300 text-[11px] h-6 font-semibold bg-transparent"
          >
            Applied
          </Chip>
        );
    }
  };

  
  const getRelativeTime = (dateString) => {
    const created = new Date(dateString);
    const now = new Date();
    const diffMs = now - created;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 60) return `${diffMins} minutes ago`;
    if (diffHours < 24)
      return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  };

  return (
    <Card className="w-full border border-zinc-800/80 bg-zinc-950 text-zinc-100 shadow-2xl rounded-xl overflow-hidden">
      <div className="w-full overflow-x-auto scrollbar-none">
        <table className="w-full min-w-[850px] text-left border-collapse">
     
          <thead>
            <tr className="border-b border-zinc-800/60 bg-zinc-900/20">
              <th className="p-4 text-xs font-semibold text-zinc-500 tracking-wider pl-6 w-[35%]">
                Job Title
              </th>
              <th className="p-4 text-xs font-semibold text-zinc-500 tracking-wider w-[20%]">
                Company
              </th>
              <th className="p-4 text-xs font-semibold text-zinc-500 tracking-wider w-[15%]">
                Applied
              </th>
              <th className="p-4 text-xs font-semibold text-zinc-500 tracking-wider w-[15%]">
                Status
              </th>
              <th className="p-4 text-xs font-semibold text-zinc-500 tracking-wider pr-6 text-right w-[15%]">
                Action
              </th>
            </tr>
          </thead>

  
          <tbody className="divide-y divide-zinc-900">
            {applications.map((app) => (
              <tr
                key={app._id}
                className="hover:bg-zinc-900/30 transition-colors duration-150"
              >
         
                <td className="p-4 pl-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center shrink-0 text-zinc-400 font-mono text-sm">
                  
                    {"</>"}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-zinc-200 hover:text-white transition-colors cursor-pointer">
                      {app.jobTitle}
                    </span>
                    <span className="text-xs text-zinc-500 mt-0.5">
                 
                      Full-time • Remote
                    </span>
                  </div>
                </td>

                
                <td className="p-4 text-sm font-medium text-zinc-300">
               
                  {app.company || "Stark Industries"}
                </td>

               
                <td className="p-4 text-sm text-zinc-400">
                  {getRelativeTime(app.createdAt)}
                </td>

              
                <td className="p-4">
                  {getStatusChip(app.status || "Applied")}
                </td>
                <td className="p-4 pr-6 text-right">
                  <Button
                    as="a"
                    href={`/applications/${app._id}`}
                    variant="light"
                    size="sm"
                    className="text-zinc-400 hover:text-white font-medium text-sm bg-transparent p-0 min-w-0 h-auto"
                  >
                    Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ApplicationTable;
