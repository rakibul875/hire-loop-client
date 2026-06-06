import JobFrom from '@/components/dashboardComponents/JobFrom';
import { getLoggedInRecruiterCompany } from '@/lib/action/api/companyData';

import React from 'react';

const NewJobsPage = async() => {
  const recruiterCompany= await getLoggedInRecruiterCompany()

   return (
    <div>
      <JobFrom recruiterCompany={recruiterCompany}/>
    </div>
  );
};

export default NewJobsPage;