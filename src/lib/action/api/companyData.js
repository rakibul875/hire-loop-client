import { protectFetch } from "@/lib/allPostMathode/post";
import { handelGetSection } from "@/lib/core/allgetsection/getSection";
import { getUserSession } from "@/lib/core/session";

export const getRecruiterCompany = async (recruiterId) => {
  return protectFetch(`/my/company?recruiterId=${recruiterId}`);
};
export const getLoggedInRecruiterCompany = async () => {
  const user = await getUserSession();
  return getRecruiterCompany(user?.id);
};

export const getAllCompanies = async () => {
  return protectFetch('/company')
}

export const getJobsData = async () => {
   return await protectFetch('/jobs')
};

export const getJobsById=async(id)=>{
 return await protectFetch(`/jobs/${id}`)
}