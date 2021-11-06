import { useState, useEffect } from 'react';

import Job from '../../types/Job';
import jobsService from '../../services/jobs';
import { useHistory } from 'react-router';
import SearchBar from '.././shared/SearchBar';

const Jobs = ({ token }: { token: string }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const history = useHistory();

  const searchJobs = (searchInput: string) => {
    jobsService.getAll(token, { name: searchInput }).then((result: Job[]) => {
      setJobs(result);
    });
  };

  const viewDetails = (id: string) => {
    history.push(`jobs/${id}`);
  };

  useEffect(() => {
    jobsService.getAll(token).then((result: Job[]) => {
      setJobs(result);
    });
  }, []);

  return (
    <div className="flex flex-col items-center gap-y-2 pt-24">
      <SearchBar onSubmit={searchJobs} />

      {jobs.map((job) => (
        <div
          onClick={() => viewDetails(job.id)}
          className="grid grid-cols-2  w-full xl:w-8/12 p-3 bg-white shadow-sm max-h-32 transition ease-linear duration-100 hover:shadow-md"
          key={job.id}
        >
          <h2 className="text-gray-500">{job.name}</h2>
          <div className="text-gray-400 text-sm">{job.company.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
