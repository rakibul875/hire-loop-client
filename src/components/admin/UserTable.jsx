import React from "react";
import UserTableRow from "./UserTableRow ";


const UserTable = ({ users }) => {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-zinc-800 bg-[#1a1a1a]">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-zinc-800 text-zinc-400 text-sm font-medium">
            <th className="p-4">User Name</th>
            <th className="p-4">Email Address</th>
            <th className="p-4">Role</th>
            <th className="p-4">Join Date</th>
            <th className="p-4">Status</th>
            <th className="p-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800 text-sm text-zinc-300">
          {users.map((user) => (
            <UserTableRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      <div className="p-4 border-t border-zinc-800 flex justify-between items-center text-xs text-zinc-500">
        <div>
          Showing 1 to {users.length} of {users.length} users
        </div>
        <div className="flex gap-2 items-center">
          <button className="px-2 py-1 hover:text-white">&lt;</button>
          <button className="px-2 py-1 bg-white text-black rounded font-medium">
            1
          </button>
          <button className="px-2 py-1 hover:text-white">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
