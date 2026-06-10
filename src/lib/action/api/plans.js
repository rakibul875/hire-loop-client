import { handelGetSection } from "@/lib/core/allgetsection/getSection"

export const getPlanById=async(planId)=>{
 return await handelGetSection(`/plans?planId=${planId}`)
}