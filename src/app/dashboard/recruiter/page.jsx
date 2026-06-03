import { NavigationDrawer } from '@/components/dashboardComponents/NavigationDrawer';
import React from 'react';

const RecruiterPage = () => {
    return (
        <div className='flex min-h-screen gap-2'>
            <NavigationDrawer/>
            <h1>I am a recruiter</h1>
        </div>
    );
};

export default RecruiterPage;