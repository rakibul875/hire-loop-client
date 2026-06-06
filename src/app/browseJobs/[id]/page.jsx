import React from 'react';

const JobsDetails = async({params}) => {
    const {id}= await params;

    return (
        <div>
            <h1>Id ; {id}</h1>
        </div>
    );
};

export default JobsDetails;