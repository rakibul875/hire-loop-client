import NotJobSeeker from '@/components/NotJobSeeker';
import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';

const ApplyPage = async({params}) => {
    const {id}= await params;
    const user= await getUserSession()
    if(!user){
        redirect(`/signin?redirect=/browseJobs/${id}/apply`)
    }
  if (user?.role !== 'seeker') {
  return (
    <div className="">
        <NotJobSeeker/>
    </div>
  );
}
    return (
        <div>
            <h1>Apply Jobs: {id}</h1>
        </div>
    );
};

export default ApplyPage;