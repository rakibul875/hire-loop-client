export const handelGetSection=async(path)=>{
 const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`)
 return res.json()
}