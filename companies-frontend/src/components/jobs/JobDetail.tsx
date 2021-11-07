import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import Job from '../../types/Job';
import jobsService from '../../services/jobs';

const JobDetail = ({ token }: { token: string }) => {
  const [job, setJob] = useState<Job>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    jobsService.get(id, token).then((result: Job) => {
      console.log(job);
      setJob(result);
    });
  }, []);

  return job ? (
    <div className="flex w-screen justify-center">
      <div className="w-2/4 mt-3 bg-white px-3 pt-3 pb-6 h-full">
        <div className="flex justify-center">
          <div></div>
          <p className="text-xl text-gray-500 p-3">{job.name}</p>
        </div>
        <p className="text-sm px-3 text-gray-400">{job.description}</p>

        <div className="flex flex-col bg-white">
          <div className="flex flex-col h-1/2">
            <p className="pl-3 pb-2 my-3 text-gray-500  border-gray-300 border-b-2">
              Company
            </p>
            <p className="text-sm px-3 text-gray-400">{job.company.name}</p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default JobDetail;
