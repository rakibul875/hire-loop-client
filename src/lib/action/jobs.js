'use server'

// const baseUrl= process.env.NEXT_PUBLIC_BASE_URL||"http://localhost:8000"

export const createJobs= async (newJobsData)=>{
    const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/jobs`,{
        method:'POST',
        headers:{
            'Content-type':'application/json',
        },
        body: JSON.stringify(newJobsData),
    })
    return res.json()
}