import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import Company from '../../types/Company';
import companiesService from '../../services/companies';
import reviewsService from '../../services/reviews';

const CompanyDetail = ({ token }: { token: string }) => {
  const [company, setCompany] = useState<Company | undefined>(undefined);
  const [review, setReview] = useState<string>('');
  const [userId, setUserId] = useState<string>('');

  if (!userId) {
    const loggedCompanyAPIUser = window.localStorage.getItem(
      'loggedCompanyAPIUser'
    );

    if (loggedCompanyAPIUser) {
      const user = JSON.parse(loggedCompanyAPIUser);
      const id = user.id;

      if (token) {
        setUserId(id);
      }
    }
  }

  const { id } = useParams<{ id: string }>();

  const handleReviewChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReview(event.target.value);
  };

  const submitReview = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    reviewsService.post(token, company!.id, review).then((result) => {
      setReview('');

      const companyWithNewReview = {
        ...company!,
        reviews: company!.reviews.concat({ ...result, user: result.user.id }),
      };

      setCompany(companyWithNewReview);
    });
  };

  useEffect(() => {
    companiesService.get(id, token).then((result: Company) => {
      console.log(company);
      setCompany(result);
    });
  }, []);

  return company ? (
    <div className="flex w-screen justify-center">
      <div className="w-2/4 mt-3 bg-white px-3 pt-3 pb-6 h-full">
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
                <p key={manager.id} className="text-sm px-3 py-1 text-gray-400">
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
                <p key={job.id} className="px-3 py-1 text-sm text-gray-400">
                  {job.name}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="pl-3 pb-2 my-3 text-gray-500 border-gray-300 border-b-2">
              Add a review
            </p>
            <form onSubmit={submitReview}>
              <div className="flex flex-col">
                <textarea
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-black"
                  rows={4}
                  value={review}
                  onChange={handleReviewChange}
                />
                <button
                  className="mt-1 p-1 bg-indigo-400 text-white rounded-sm"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div>
            <p className="pl-3 mt-3 text-gray-500 border-gray-300 border-b-2">
              User reviews
            </p>
            {company.reviews.map((review) => (
              <div
                className="break-words text-  sm text-gray-400 border-gray-300 border-b-2 pb-3 pt-3"
                key={review.id}
              >
                {review.content}
                {console.log(userId, review)}
                {userId === review.user ? (
                  <div className="float-right">
                    <button className=" bg-red-400 text-white rounded-md px-1">
                      Delete
                    </button>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default CompanyDetail;
