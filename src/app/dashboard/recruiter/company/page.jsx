import CompanyProfile from '@/components/dashboardComponents/CompanyProfile';
import { getRecruiterCompany } from '@/lib/action/api/companyData';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const CompanyPage = async () => {
    const session= await getUserSession();
    const company= await getRecruiterCompany(session?.id)
    return (
        <div>
            <CompanyProfile recruiter={session} recruiterCompany={company}/>
        </div>
    );
};

export default CompanyPage;