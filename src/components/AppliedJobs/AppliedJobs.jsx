import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getApplyCart } from '../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'

const AppliedJobs = () => {
    const appliedJobs = useLoaderData();
    const [appliedInJobs, setAppliedInJobs] = useState([]);

    useEffect(() => {
        const applyCart = getApplyCart();
        const appliedJobsData = [];

        for (const jobId in applyCart) {
            const jobData = appliedJobs.find(job => job.id == jobId);

            if (jobData) {
                appliedJobsData.push(jobData);
            }
        }

        setAppliedInJobs(appliedJobsData);
    }, []);

    // console.log(job)

    return (
        <div>
            <section className='h-56 w-full bg-sky-50 shadow-lg'>
                <h2 className='text-center text-3xl font-semibold p-20'>Applied Jobs</h2>
            </section>
            <section className='md:ml-36 md:mr-36 mt-10 w-auto h-96 grid md:grid-cols-1 gap-20 '>
                {appliedInJobs.map(job => (
                    <div key={job.id}>
                        <div className='md:flex'>
                            <div className='flex'>
                                <img className='h-40 w-40' src={job.companyImage} alt="" />
                                <div className='ml-5'>
                                    <h2 className='text-lg font-bold'>{job.jobTitle}</h2>
                                    <h3 className='text-sm'>{job.companyName}</h3>
                                    <div className='flex gap-3 mt-4'>
                                        <div className="border-solid border-2 border-indigo-600 p-2 rounded-lg">{job.jobTime1}</div>
                                        <div className="border-solid border-2 border-indigo-600 p-2 rounded-lg">{job.jobTime2}</div>
                                    </div>
                                    <div className='flex gap-2 mt-5'>
                                        <p className=''><FontAwesomeIcon icon={faLocationDot} /> {job.jobLocation}</p>
                                        <p><FontAwesomeIcon icon={faCircleDollarToSlot} /> Salary :{job.salary}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='justify-end my-auto'>
                                <button className="btn bg-purple-500 text-white">View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default AppliedJobs;