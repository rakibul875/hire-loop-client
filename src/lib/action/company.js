'use server'

import { revalidatePath } from "next/cache"
import { handelPost } from "../allPostMathode/post"

export const createCompany=async (companyData)=>{
    return handelPost('/company',companyData)
}
export const updateCompanyStatus=async (id,data)=>{
 const result= handelPost(`/company/${id}`,data,'PATCH')
 revalidatePath('/dashboard/admin/companies')
 return result
}