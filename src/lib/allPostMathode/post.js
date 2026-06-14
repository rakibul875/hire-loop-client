"use server";

import { redirect } from "next/navigation";
import { getUserToken } from "../core/session";

export const authHeader = async () => {
  const token = await getUserToken();
  const headers = token? {
    authorization: `Bearer ${token}`,
  }:{}
  return headers;
};

export const protectFetch= async(path)=>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`,{
    headers: await authHeader(),
  })
  return res.json() 
}

export const handelPost = async (path, newData, method = "POST") => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`, {
    method: method,
    headers: {
      "Content-type": "application/json",
      ... await authHeader(),
    },
    body: JSON.stringify(newData),
  });
  return handelStatus(res);
};

const handelStatus=res=>{
  if(res.status===401){
    redirect('/unauthorize')
  }
  if(res.status===403){
    redirect('/forbidden')
  }
  return res.json()
}