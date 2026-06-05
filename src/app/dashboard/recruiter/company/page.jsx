import CompanyProfile from '@/components/dashboardComponents/CompanyProfile';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const CompanyPage = async () => {
    const session= await getUserSession();
    
    return (
        <div>
            <CompanyProfile recruiter={session}/>
        </div>
    );
};

export default CompanyPage;