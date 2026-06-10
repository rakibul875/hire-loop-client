import { roleBaseSession } from '@/lib/core/session';


const seekerLayout = async({children}) => {
    await roleBaseSession('seeker')
    return children ;
};

export default seekerLayout;