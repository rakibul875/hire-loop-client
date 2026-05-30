import SingUP from '@/components/sinup/SingUP';
import SingUpLeftSide from '@/components/sinup/SingUpLeftSide';
import React from 'react';

const SingUp = () => {
    return (
        <div className='container mx-auto flex'>
            <SingUpLeftSide/>
            <SingUP/>
        </div>
    );
};

export default SingUp;