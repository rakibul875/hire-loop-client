'use server'
import { headers } from "next/headers";
import { auth } from "./auth";
import { revalidatePath } from "next/cache";

export const updateUser = async (userId, role) => {
    console.log(`Updating user ${userId} to role ${role}`);
  const data = await auth.api.setRole({
    body: {
        userId: userId, 
        role: role, 
    },
    
    headers: await headers(),
});
console.log("Update user API response:", data);
revalidatePath("/dashboard/admin/users"); // Revalidate the users page to reflect changes
return data;
};
