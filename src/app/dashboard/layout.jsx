import { NavigationDrawer } from '@/components/dashboardComponents/NavigationDrawer';
import React from 'react';

const DashboardLayout = ({children}) => {
    
    return (
        <div className='flex min-h-screen gap-5'>
            <NavigationDrawer/>
            <div className="flex-1">{children}</div>
        </div>
    );
};

export default DashboardLayout;