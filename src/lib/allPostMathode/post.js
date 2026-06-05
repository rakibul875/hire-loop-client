'use server'

export const handelPost= async(path,newData)=>{

    const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`,{
        method:'POST',
        headers:{
            'Content-type':'application/json',
        },
        body: JSON.stringify(newData),
    })
    return res.json()
}