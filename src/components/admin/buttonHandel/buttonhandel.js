import { updateCompanyStatus } from "@/lib/action/company"

export const handelApprove = async (companyId) => {
    const result= await updateCompanyStatus(companyId,{status:'Approved'})
    if(result.modifiedCount>0){
        alert("Company approved successfully!")
    }
    console.log("Approve:", companyId,"result:", result)
}
export const handelReject = async (companyId) => {
    const result= await updateCompanyStatus(companyId,{status:'Rejected'})
    if(result.modifiedCount>0){
        alert("Company rejected successfully!")
    }
    console.log("Reject:", companyId,"result:", result)
}