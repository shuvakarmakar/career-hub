import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCircleDollarToSlot, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { addToDb } from '../utilities/fakedb';

const JobDetails = () => {
    const jobDetails = useParams();
    // console.log(jobDetails)

    const featuredJob = useLoaderData();
    // console.log(featuredJob)

    const [jobAbout, setJobAbout] = useState([]);

    useEffect(() => {
        const jobData = featuredJob.find(feature => feature.id == jobDetails.jobId);
        // console.log(jobData);
        setJobAbout(jobData)

    }, [])

    // // For applyNow Button
    // const [jobId, setJobId] = useState([]);

    // let newCart = [];

    const applyNow = (job) => {
        console.log(job)
        addToDb(job)
    }

    return (
        <div>
            <section className='h-56 w-full bg-sky-50 shadow-lg'>
                <h2 className='text-center text-3xl font-semibold p-20'>Job Details</h2>
            </section>
            <br />
            <br />
            <section className='md:ml-36 md:mr-36 md:mt-10 w-auto h-96 grid md:grid-cols-2 gap-20'>
                <div>
                    <p className='mt-5 mb-2 text-justify'><span className='font-bold'>Job Descriptions</span> : {jobAbout.jobDescription}</p>
                    <p className='mt-5 text-justify'><span className='font-bold'>Job Responsibility</span> : {jobAbout.jobResponsibilities}</p>
                    <p className='mt-5 text-justify'><span className='font-bold'>Educational Requirments</span> : {jobAbout.educationalRequirements}</p>
                    <p className='mt-5 text-justify'><span className='font-bold'>Experiences</span> : {jobAbout.experiences}</p>
                </div>
                <div>
                    <div className='bg-sky-100 shadow p-5 w-96'>
                        <h3 className='text-xl font-semibold   '>Job Details</h3>
                        <p className='mt-5 mb-2'><FontAwesomeIcon icon={faCircleDollarToSlot} /> <span className='font-semibold'>Salary</span> : {jobAbout.salary}</p>
                        <p><FontAwesomeIcon icon={faBriefcase} /> <span className='font-semibold'>Job Title</span> : {jobAbout.jobTitle}</p>
                        <h3 className='text-xl font-semibold mt-10'>Contact Information</h3>
                        <p className='mt-5 mb-2'><FontAwesomeIcon icon={faPhone} /> <span className='font-semibold'>Phone</span> : {jobAbout.phone}</p>
                        <p className='mb-2'><FontAwesomeIcon icon={faEnvelope} /> <span className='font-semibold'>Email</span> : {jobAbout.email}</p>
                        <p><FontAwesomeIcon icon={faLocationDot} /> <span className='font-semibold'>Address</span> : {jobAbout.address}</p>
                    </div>
                    <div>
                        <Link><button onClick={() => applyNow(jobAbout.id)} className="btn w-96 bg-purple-500 text-white mt-5">Apply Now</button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JobDetails;