import Layout from '../layouts/index';
import FirstSection from '../components/Home/FirstSection';
import SecondSection from '../components/Home/SecondSection';

import ContactUsSection from '../components/Home/ContactUs/Section';

import { JobRepository } from '../data/Repository/Job/JobRepository';

const jobListEmpty = JobRepository.isEmpty();

export default function Home() {
  return (
    <Layout title="10HourLabs">
      <FirstSection />

      {!jobListEmpty && <SecondSection />}

      <div>
        {/* Optmizied for screen readers */}
        <a id="contact" href="/#" className="sr-only">
          Contact Us
        </a>
        <ContactUsSection />
      </div>
    </Layout>
  );
}
