import AdminCompanyTable from "@/components/admin/AdminCompanyTable";
import { getAllCompanies } from "@/lib/action/api/companyData";
import React from "react";

const AdminCompaniesPage = async () => {
  const companies = (await getAllCompanies()) || [];

  return (
    <div className="w-full min-h-screen p-4 sm:p-8 bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-zinc-50">
              Corporate Verification
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-zinc-500 font-medium">
              Review, approve or restrict pending company recruiter profiles.
            </p>
          </div>
          <div className="text-xs font-bold text-amber-500 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
            Total System Logs: {companies.length}
          </div>
        </div>
        <AdminCompanyTable companies={companies} />
      </div>
    </div>
  );
};

export default AdminCompaniesPage;
