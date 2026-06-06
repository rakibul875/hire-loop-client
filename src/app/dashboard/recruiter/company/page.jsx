import CompanyProfile from '@/components/dashboardComponents/CompanyProfile';
import { getRecruiterCompany } from '@/lib/action/api/companyData';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const CompanyPage = async () => {
    const session= await getUserSession();
    // console.log(session?.id)
    const sessionId=session?.id
    const company= await getRecruiterCompany(sessionId)
    console.log(sessionId)
    console.log(company)
    return (
    //    newCompany={company}
        <div>
            <CompanyProfile recruiter={session} newCompany={company}/>
        </div>
    );
};

export default CompanyPage;