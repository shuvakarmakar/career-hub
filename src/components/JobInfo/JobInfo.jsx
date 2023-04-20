import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'

const JobInfo = ({ jobInfo }) => {
    const { id, companyName, jobTitle, salary, companyImage, jobTime1, jobTime2, jobLocation } = jobInfo;

    return (
        <div>
            <div className="card md:w-max bg-base-100 shadow-xl">
                <div className='justify-start mt-5 ml-5 p-3'>
                    <img className='w-20' src={companyImage} alt="" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{jobTitle}</h2>
                    <p>{companyName}</p>
                    <div className='flex gap-3'>
                        <div className="border-solid border-2 border-indigo-600 p-2 rounded-lg">{jobTime1}</div>
                        <div className="border-solid border-2 border-indigo-600 p-2 rounded-lg">{jobTime2}</div>
                    </div>
                    <div className='flex gap-2'>
                        <FontAwesomeIcon icon={faLocationDot} /><p className=''>{jobLocation}</p>
                        <FontAwesomeIcon icon={faCircleDollarToSlot} /><p>Salary :{salary}</p>
                    </div>
                    <div className="card-actions justify-start">

                        <Link to={`/job/${id}`}><button className="btn bg-purple-500 text-white">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobInfo;