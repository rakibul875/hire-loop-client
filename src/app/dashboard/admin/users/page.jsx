// app/admin/users/page.js
import UserTable from "@/components/admin/UserTable";
import { getUserList } from "@/lib/user";
import React from "react";


const AdminUsersPage = async () => {
  const data = await getUserList();
  const users = data?.users || [];

  return (
    <div className="bg-[#121212] text-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Users ({users.length})</h1>
        <UserTable users={users} />
      </div>
    </div>
  );
};

export default AdminUsersPage;
