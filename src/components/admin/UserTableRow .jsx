// app/admin/users/_components/UserTableRow.js
"use client";

import React from "react";

const UserTableRow = ({ user }) => {
  // ডাটাবেজের createdAt ডেট ফরম্যাট করার জন্য (যেমন: "Jun 09, 2026")
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };


  const handleRoleToggle = (id, currentRole) => {
    console.log(`Toggle role for ${id}. Current: ${currentRole}`);
  };

  const handleStatusToggle = (id, currentStatus) => {
    console.log(`Toggle status for ${id}. Current: ${currentStatus}`);
  };


  const userStatus = user.status || "Active";

  return (
    <tr className="hover:bg-zinc-900/50 transition-colors">

      <td className="p-4 flex items-center gap-3">
        {user.image ? (
          <img
            src={user.image}
            alt={user.name}
            className="w-8 h-8 rounded-full object-cover border border-zinc-700"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-bold text-white">
            {user.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>
        )}
        <span className="font-medium text-white">{user.name || "Unknown"}</span>
      </td>

      <td className="p-4 text-zinc-400">{user.email}</td>

      <td className="p-4">
        <span
          className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full border uppercase tracking-wider ${
            user.role === "recruiter"
              ? "bg-zinc-800 text-zinc-200 border-zinc-700"
              : "bg-zinc-900 text-zinc-400 border-zinc-800"
          }`}
        >
          {user.role === "recruiter" ? "💼 Recruiter" : "👤 Seeker"}
        </span>
      </td>

  
      <td className="p-4 text-zinc-400">{formatDate(user.createdAt)}</td>

    
      <td className="p-4">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium rounded-full border ${
            userStatus === "Active"
              ? "bg-emerald-950/30 text-emerald-400 border-emerald-900/50"
              : "bg-rose-950/30 text-rose-400 border-rose-900/50"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${userStatus === "Active" ? "bg-emerald-400" : "bg-rose-400"}`}
          ></span>
          {userStatus}
        </span>
      </td>

      <td className="p-4 text-right space-x-4 text-xs font-medium">
        {userStatus === "Suspended" ? (
          <>
            <button
              onClick={() => handleStatusToggle(user._id, userStatus)}
              className="text-emerald-400 hover:underline"
            >
              Activate
            </button>
            <button className="text-zinc-500 hover:text-rose-400">
              Delete
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => handleRoleToggle(user?._id, user?.role)}
              className="text-zinc-400 hover:text-white"
            >
              Make {user.role === "seeker" ? "Recruiter" : "Seeker"}
            </button>
            <button
              onClick={() => handleStatusToggle(user._id, userStatus)}
              className="text-rose-500 hover:underline"
            >
              Suspend
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default UserTableRow;
