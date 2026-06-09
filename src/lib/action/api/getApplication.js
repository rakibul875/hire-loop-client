import { handelGetSection } from "@/lib/core/allgetsection/getSection"

export const getApplication=async (applicantId)=>{
    return handelGetSection(`/application?applicantId=${applicantId}`)
}