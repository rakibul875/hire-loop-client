'use server'

import { handelPost } from "../allPostMathode/post"

export const createSubscription= async (subInfo)=>{
    return handelPost('/subscription',subInfo)
   
}