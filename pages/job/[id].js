import useSWR from 'swr';
import { useRouter } from 'next/router';

import Layout from '../../layouts/index';
import FormToApply from '../../components/Jobs/PersonalDetails/FormToApply';
import JobDescriptionSection from '../../components/Jobs/JobDescriptionSection';
import OverlayLoader from '../../components/Common/OverlayLoader';
import { JobRepository } from '../../data/Repository/Job/JobRepository';

import BackButton from '../../components/Common/Button/BackButton';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function JobDescription() {
  const { query, push } = useRouter();

  const { data: job } = useSWR(`/api/job/${query.id}`, fetcher, {
    refreshInterval: 0,
  });

  if (query.id && !JobRepository.findBySlugPath(query.id)) push('/404');

  const isLoading = !job;

  return (
    <Layout title={`10HourLabs: ${job?.title || 'Job Description'}`}>
      <div className="col-sm-10 col-md-9 col-lg-8 col-xl-7 mx-auto space-top-1 space-bottom-2">
        <div className="mb-3">
          <BackButton />
        </div>
        <div className="card position-relative min-h-380rem p-3 p-sm-4 p-md-5 p-xl-6">
          {isLoading && <OverlayLoader />}

          <JobDescriptionSection data={job} />

          <FormToApply data={job} />
        </div>
      </div>
    </Layout>
  );
}
