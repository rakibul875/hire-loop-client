import { getAllCompanies } from '@/lib/action/api/companyData';
import React from 'react';

const AdminCompaniesPage = async () => {
    const companies = await getAllCompanies();
    return (
        <div>
            <h1 className='text-2xl font-bold'>Admin Companies Page{companies.length}</h1>
        </div>
    );
};

export default AdminCompaniesPage;