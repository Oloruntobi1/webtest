import Layout from '../layouts/index';

import TopSection from '../components/Jobs/Opening/TopSection';
import OpenJobsSection from '../components/Jobs/Opening';

export default function Jobs() {
  return (
    <Layout title="10HourLabs: Current Job Openings">
      <TopSection />
      <OpenJobsSection />
    </Layout>
  );
}
