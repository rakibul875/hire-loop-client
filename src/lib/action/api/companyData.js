import { handelGetSection } from "@/lib/core/allgetsection/getSection"

export const getRecruiterCompany=async(recruiterId)=>{
    return handelGetSection(`/my/company?recruiterId=${recruiterId}`)
}