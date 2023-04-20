import React from 'react';

const JobCategory = ({jc}) => {
    const { jobTitle , jobAvailability, jobImage} = jc
    return (
        <div>
            <div className="card sm:w-auto md:w-60 bg-sky-50 shadow-xl mt-5">
                <figure><img className='h-36 w-36' src={jobImage} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{jobTitle}!</h2>
                    <p>{jobAvailability}</p>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;