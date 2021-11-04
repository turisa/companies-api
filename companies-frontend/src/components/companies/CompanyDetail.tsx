import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import Company from '../../types/Company';
import companiesService from '../../services/companies';

const CompanyDetail = () => {
  const [company, setCompany] = useState<Company>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    companiesService.get(id).then((result) => {
      setCompany(result);
    });
  }, [id, company]);

  return company ? (
    <div className="flex w-screen justify-center">
      <div className="w-2/4 mt-24 bg-white px-3 pt-3 pb-6 h-full">
        <div className="flex justify-center">
          <div></div>

          <p className="text-xl text-gray-500 p-3">{company.name}</p>
        </div>
        <p className="text-sm px-3 text-gray-400">{company.description}</p>

        <div className="flex flex-col bg-white">
          <div className="flex flex-col h-1/2">
            <p className="pl-3 pb-2 my-3 text-gray-500  border-gray-300 border-b-2">
              Management team
            </p>
            <div className="flex flex-col">
              {company.managers.map((manager) => (
                <p className="text-sm px-3 py-1 text-gray-400">
                  {manager.name}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="pl-3 pb-2 my-3 text-gray-500 border-gray-300 border-b-2">
              Jobs
            </p>
            <div className="flex flex-col">
              {company.jobs.map((job) => (
                <p className="px-3 py-1 text-sm text-gray-400">{job.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default CompanyDetail;
