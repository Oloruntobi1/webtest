import Layout from '../layouts/index';
import TopSection from '../components/FindingTalent/TopSection';
import OurProcess from '../components/FindingTalent/OurProcess';

import ContactUsSection from '../components/Home/ContactUs/Section';
import RatingsLegend from '../components/FindingTalent/RatingsLegend';

export default function FindingTalent() {
  return (
    <Layout title="10HourLabs: Finding Talent">
      <TopSection />
      <OurProcess />
      <RatingsLegend />
      <ContactUsSection />
    </Layout>
  );
}
