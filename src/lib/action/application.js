'use server'
import { handelPost } from "../allPostMathode/post"

export const handelApplication=async(applicationData)=>{
 return handelPost('/application',applicationData)
}