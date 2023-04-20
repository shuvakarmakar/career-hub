import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import man from "../../assets/All Images/P3OLGJ1 copy 1.png"
import JobCategory from '../JobCategory/JobCategory';
import JobDetails from '../JobDetails/JobDetails';
import JobInfo from '../JobInfo/JobInfo';

const Home = () => {

    const jobInfos = useLoaderData();

    const [showAllJobs, setShowAllJobs] = useState(false);
    const [jobCategory, setJobCategory] = useState([]);

    useEffect(() => {
        fetch('jobcategory.json')
            .then(res => res.json())
            .then(data => setJobCategory(data))
    }, [])



    return (
        <div>
            <div className='md:flex bg-sky-50'>
                <div className='p-10  md:pl-28 md:pt-28 '>
                    <h1 className='text-3xl md:text-7xl md:h-80 md:w-96 md:font-semibold'>One Step Closer To Your <span className='text-purple-500'>Dream Job</span></h1>
                    <p className='md:w-96 md:h-24'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn bg-purple-500 text-white">Get Started</button>
                </div>
                <div>
                    <img src={man} alt="" />
                </div>
            </div>
            {/* Job Category Field */}
            <div>
                <h2 className='text-2xl md:text-5xl text-center mt-5 md:mt-10 font-semibold'>Job Category List</h2>
                <p className='text-center m-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='md:flex justify-between md:p-4'>
                    {
                        jobCategory.map(jc => <JobCategory
                            key={jc._id}
                            jc={jc}
                        ></JobCategory>)
                    }
                </div>
            </div>
            {/* Featured Jobs */}
            <div>
                <h2 className='text-2xl md:text-5xl text-center mt-5 md:mt-10 font-semibold'>Featured Jobs</h2>
                <p className='text-center m-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid md:grid-cols-2 md:p-20 gap-4'>
                    {
                        showAllJobs 
                            ? jobInfos.map(jobInfo => <JobInfo
                                key={jobInfo.id}
                                jobInfo={jobInfo}
                            ></JobInfo>)
                            : jobInfos.slice(0, 4).map(jobInfo => <JobInfo 
                                key={jobInfo.id}
                                jobInfo={jobInfo}
                            ></JobInfo>)
                    }
                </div>
                {!showAllJobs && ( 
                    <div className="card-actions justify-center mb-5">
                        <button className="btn bg-purple-500 text-white" onClick={() => setShowAllJobs(true)}>Show All Jobs</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;