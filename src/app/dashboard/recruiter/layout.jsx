import { roleBaseSession } from '@/lib/core/session';


const recruiterLayout = async({children}) => {
    await roleBaseSession('recruiter')
    return children ;
};

export default recruiterLayout;