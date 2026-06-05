'use server'

import { handelPost } from "../allPostMathode/post"



export const createJobs= async (newJobsData)=>{
    return handelPost('/jobs',newJobsData)
   
}