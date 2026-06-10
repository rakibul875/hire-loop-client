import { roleBaseSession } from '@/lib/core/session';

const AdminDashboardLayout = async({children}) => {
    // await roleBaseSession('admin')
    return children;
};

export default AdminDashboardLayout;