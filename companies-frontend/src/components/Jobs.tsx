import { useEffect, useState } from 'react';
import jobsService from '../services/jobsService';
import Job from '../types/Job';

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    jobsService.getAll().then((result) => setJobs(result));
  }, []);

  return (
    <div>
      <h2>Jobs</h2>
      {jobs.map((job) => (
        <p>{job.name}</p>
      ))}
    </div>
  );
};

export default Jobs;
