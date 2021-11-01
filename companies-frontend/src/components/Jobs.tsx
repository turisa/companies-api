import { useEffect, useState } from 'react';
import jobsService from '../services/jobsService';
import Job from '../types/Job';

const Jobs = ({ jobs }: { jobs: Job[] }) => {
  return (
    <div className="flex flex-col gap-y-2 pt-24">
      {jobs.map((job) => (
        <div
          className="ml-48 mr-48 p-3 bg-white shadow-lg max-h-32"
          key={job.id}
        >
          <h2 className="font-bold text-gray-500">{job.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
