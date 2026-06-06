import JobFrom from '@/components/dashboardComponents/JobFrom';
import { getLoggedInRecruiterCompany, getRecruiterCompany } from '@/lib/action/api/companyData';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const NewJobsPage = async() => {
  const recruiterCompany= await getLoggedInRecruiterCompany()
  console.log(recruiterCompany)

   return (
    <div>
      <JobFrom recruiterCompany={recruiterCompany}/>
    </div>
  );
};

export default NewJobsPage;