import useSWR from 'swr';

import ListSection from './ListSection';
import OverlayLoader from '../../Common/OverlayLoader';
import NotFound from '../NotFound';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function OpenJobsSection() {
  const { data: jobs, error } = useSWR('/api/jobs', fetcher, {
    refreshInterval: 0,
  });

  const isLoading = !jobs && !error;

  const jobsFound = jobs && Object.keys(jobs).length > 0;

  return (
    <div className="bg-light">
      <div className="col-md-9 col-xl-8 mx-auto">
        {/* prettier-ignore */}
        <div className="container space-top-1 space-bottom-1 position-relative">
          {isLoading && <OverlayLoader />}
          {jobsFound
            && Object.keys(jobs).map((jobID) => (
              <ListSection data={jobs[jobID]} key={jobID} />
            ))}
          {jobs && !jobsFound && <NotFound />}
        </div>
      </div>
    </div>
  );
}
