
export const handelGetSection=async(path)=>{
    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`,"apply page")
 const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`)
 return await res.json()
}