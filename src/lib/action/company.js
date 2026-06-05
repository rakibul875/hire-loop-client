'use server'

import { handelPost } from "../allPostMathode/post"

export const createCompany=async (companyData)=>{
    return handelPost('/company',companyData)
}