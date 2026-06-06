import { handelGetSection } from "@/lib/core/allgetsection/getSection";
import { getUserSession } from "@/lib/core/session";

export const getRecruiterCompany = async (recruiterId) => {
  return handelGetSection(`/my/company?recruiterId=${recruiterId}`);
};
export const getLoggedInRecruiterCompany = async () => {
  const user = await getUserSession();
  return getRecruiterCompany(user?.id);
};

export const getJobsData = async () => {
   return await handelGetSection('/jobs')
};

export const getJobsById=async(id)=>{
 return await handelGetSection(`/jobs/${id}`)
}