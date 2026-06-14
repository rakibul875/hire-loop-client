import { protectFetch } from "@/lib/allPostMathode/post"
import { handelGetSection } from "@/lib/core/allgetsection/getSection"

export const getApplication=async (applicantId)=>{
    return protectFetch(`/application?applicantId=${applicantId}`)
}