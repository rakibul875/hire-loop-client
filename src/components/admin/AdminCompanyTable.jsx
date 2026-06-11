"use client";

import React from "react";
import { Card, Button, Chip } from "@heroui/react";
import { handelApprove, handelReject } from "./buttonHandel/buttonhandel";

const AdminCompanyTable = ({ companies = [] }) => {
  if (companies.length === 0) {
    return (
      <Card className="p-8 text-center bg-zinc-900/50 border border-zinc-800 rounded-xl">
        <p className="text-sm font-medium text-zinc-500">
          No company applications found.
        </p>
      </Card>
    );
  }


  const renderStatus = (status) => {
    const currentStatus = status?.toLowerCase() || "pending";

    switch (currentStatus) {
      case "approved":
        return (
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
            Approved
          </div>
        );
      case "rejected":
        return (
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-500">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-sm shadow-rose-500/50" />
            Rejected
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-500">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-sm shadow-amber-500/50" />
            Pending
          </div>
        );
    }
  };


  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };


  const getInitials = (name) => {
    if (!name) return "CO";
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <Card className="w-full border border-zinc-800/80 bg-zinc-950 text-zinc-100 shadow-2xl rounded-xl overflow-hidden">
      <div className="w-full overflow-x-auto scrollbar-none">
        <table className="w-full min-w-[950px] text-left border-collapse">
       
          <thead>
            <tr className="border-b border-zinc-800/60 bg-zinc-900/20">
              <th className="p-4 text-xs font-medium text-zinc-500 tracking-wider pl-6 w-[25%]">
                Company Name
              </th>
              <th className="p-4 text-xs font-medium text-zinc-500 tracking-wider w-[20%]">
                Website / Recruiter ID
              </th>
              <th className="p-4 text-xs font-medium text-zinc-500 tracking-wider w-[15%]">
                Industry
              </th>
              <th className="p-4 text-xs font-medium text-zinc-500 tracking-wider w-[15%]">
                Status
              </th>
              <th className="p-4 text-xs font-medium text-zinc-500 tracking-wider w-[15%]">
                Date Submitted
              </th>
              <th className="p-4 text-xs font-medium text-zinc-500 tracking-wider pr-6 text-right w-[15%]">
                Actions
              </th>
            </tr>
          </thead>

         
          <tbody className="divide-y divide-zinc-900">
            {companies.map((company) => (
              <tr
                key={company._id}
                className="hover:bg-zinc-900/20 transition-colors duration-150"
              >
               
                <td className="p-4 pl-6 flex items-center gap-3">
                  {company.logo ? (
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-9 h-9 rounded-lg bg-zinc-900 object-contain border border-zinc-800 shrink-0"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700/50 flex items-center justify-center shrink-0 text-zinc-400 font-bold text-xs">
                      {getInitials(company.name)}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-zinc-200">
                      {company.name}
                    </span>
                    <span className="text-[11px] text-zinc-500 mt-0.5">
                      {company.employeeCount || "0-10"} employees
                    </span>
                  </div>
                </td>

           
                <td className="p-4">
                  <a
                    href={company.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-zinc-400 hover:text-primary transition-colors block truncate max-w-[180px]"
                  >
                    {company.websiteUrl
                      ?.replace("https://", "")
                      .replace("www.", "") || "no-link.com"}
                  </a>
                  <span className="text-[10px] font-mono text-zinc-600 block mt-0.5">
                    REC: {company.recruiterId?.slice(-6)}
                  </span>
                </td>

           
                <td className="p-4">
                  <Chip
                    size="sm"
                    className="bg-zinc-900 border border-zinc-800 text-zinc-400 capitalize text-[11px]"
                  >
                    {company.industry || "General"}
                  </Chip>
                </td>

             
                <td className="p-4">{renderStatus(company.status)}</td>

               
                <td className="p-4 text-sm text-zinc-400">
                  {formatDate(company.createdAt)}
                </td>

           
                <td className="p-4 pr-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    {company.status?.toLowerCase() !== "approved" && (
                      <Button
                        size="sm"
                        variant="flat"
                        className="bg-emerald-950/40 text-emerald-500 border border-emerald-900/50 hover:bg-emerald-900/30 text-xs font-bold px-3 h-7 rounded-md min-w-0"
                        onClick={() => handelApprove(company._id)}
                      >
                        Approve
                      </Button>
                    )}
                    {company.status?.toLowerCase() !== "rejected" && (
                      <Button
                        size="sm"
                        variant="flat"
                        className="bg-rose-950/40 text-rose-500 border border-rose-900/50 hover:bg-rose-900/30 text-xs font-bold px-3 h-7 rounded-md min-w-0"
                        onClick={() => handelReject(company._id)}
                      >
                        Reject
                      </Button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Table Control Pagination Layer */}
      <div className="p-4 border-t border-zinc-900 bg-zinc-950 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs text-zinc-500">
          Showing{" "}
          <span className="text-zinc-300 font-medium">
            1-{companies.length}
          </span>{" "}
          of{" "}
          <span className="text-zinc-300 font-medium">{companies.length}</span>{" "}
          companies
        </span>

        {/* Visual Simulation of Pagination UI from screenshot */}
        <div className="flex items-center gap-1.5">
          <button className="p-1.5 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-500 opacity-50 cursor-not-allowed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3.5 h-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button className="w-7 h-7 text-xs font-bold rounded-lg bg-white text-zinc-950">
            1
          </button>
          <button className="w-7 h-7 text-xs font-semibold rounded-lg border border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors">
            2
          </button>
          <button className="w-7 h-7 text-xs font-semibold rounded-lg border border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors">
            3
          </button>
          <button className="p-1.5 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3.5 h-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default AdminCompanyTable;
