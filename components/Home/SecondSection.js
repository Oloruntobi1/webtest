import Link from 'next/link';

import styles from '../../styles/SecondSection.module.css';
import Carousel from '../Common/Carousel';

export default function SecondSection() {
  return (
    <div className="mt-10 justify-content-center overflow-x-hidden">
      <div className="space-top-sm-2 mx-auto">
        <h1 className={`${styles.openings} font-weight-normal`}>
          open job postings
        </h1>

        <h1 className={`${styles.joinUs} font-weight-normal`}>
          Are you an Engineer or Product Designer?
        </h1>

        <h1 className={`${styles.joinUs} font-weight-normal`}>
          Apply and work with world-class teams
        </h1>
      </div>

      <Carousel />

      <div className="col text-center mt-6">
        <Link href="/jobs">
          <a
            href="/jobs"
            className={`btn text-white btn--primary ${styles.openingButton} mt-3 mt-sm-5 font-weight-normal d-flex align-items-center justify-content-center mx-auto`}
          >
            View Job Openings
          </a>
        </Link>
      </div>
    </div>
  );
}
