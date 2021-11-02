import { useState, useEffect } from 'react';

import Job from '../types/Job';
import jobsService from '../services/jobsService';
import { useHistory } from 'react-router';

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const history = useHistory();

  useEffect(() => {
    jobsService.getAll().then((result) => setJobs(result));
  }, []);

  const viewDetails = (id: string) => {
    history.push(`jobs/${id}`);
  };

  return (
    <div className="flex flex-col items-center gap-y-2 pt-24">
      {jobs.map((job) => (
        <div
          onClick={() => viewDetails(job.id)}
          className="grid grid-cols-2 w-10/12 xl:w-1/2 p-3 bg-white shadow-sm max-h-32 transition ease-linear duration-100 hover:shadow-md"
          key={job.id}
        >
          <h2 className="text-gray-500">{job.name}</h2>
          <div className="flex items-center gap-x-2 text-gray-400 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
              />
            </svg>
            {job.company.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
