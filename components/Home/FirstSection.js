import Link from 'next/link';

import styles from '../../styles/FirstSection.module.css';

export default function FirstSection() {
  return (
    <div>
      <div className="row col-sm-10 mx-auto align-items-center align-items-xl-start">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="space-top-xl-3">
            <h1 className={`${styles.hire} font-weight-normal`}>
              Hire Engineers and
              <br />
              Product Designers
              <br />
              from
              <span className={`${styles.talent}`}> Africa</span>
            </h1>
          </div>

          <Link href="/finding-talent">
            <a
              href="/finding-talent"
              className={`btn text-white btn--primary ${styles.button} mt-3 mt-sm-5 font-weight-normal d-flex align-items-center justify-content-center`}
            >
              How We Help
            </a>
          </Link>
        </div>

        <div className="col-sm-6 align-self-end">
          <img
            sizes="(max-width: 480px) 320px,
                  (max-width: 576px) 480px,
                  (max-width: 768px) 576px,
                  (max-width: 992px) 768px,
                  992px"
            srcSet="/assets/images/humans/humans_qhni8c_c_scale,w_386.png 386w,
                  /assets/images/humans/humans_qhni8c_c_scale,w_518.png 518w,
                  /assets/images/humans/humans_qhni8c_c_scale,w_630.png 630w,
                  /assets/images/humans/humans_qhni8c_c_scale,w_834.png 834w,
                  /assets/images/humans/humans_qhni8c_c_scale,w_923.png 923w"
            src="/assets/images/humans/humans_qhni8c_c_scale,w_923.png"
            alt="Humans"
            className="img-fluid"
          />
        </div>
      </div>

      <div className={`${styles.middle}`}>
        {/* Optmizied for screen readers */}
        <a id="about" href="/#" className="sr-only">
          About Us Section
        </a>
        <div
          className={` ${styles.partner} row justify-content-center align-items-center`}
        >
          <div className="col-sm-5">
            <div className="mt-3">
              <h1 className={`${styles.middleHeader} font-weight-light`}>
                What we do
              </h1>

              <h1
                className={`${styles.middleBody} font-weight-normal font-gilroy`}
              >
                We partner with tech
                recruiters and start-ups to
                search for and screen talent
                from Africa that matches your specific needs
              </h1>

              {/* <button
                type="button"
                className={`btn ${styles.learnMore} mt-3 mt-sm-5  mb-10s font-weight-normal`}
              >
                Learn More
              </button> */}
            </div>
          </div>

          <div className="col-sm-5">
            <img
              sizes="(max-width: 480px) 320px,
                  (max-width: 576px) 480px,
                  (max-width: 768px) 576px,
                  (max-width: 992px) 768px,
                  992px"
              srcSet="/assets/images/people/people_ucizua_c_scale,w_333.png 333w,
                    /assets/images/people/people_ucizua_c_scale,w_515.png 515w,
                    /assets/images/people/people_ucizua_c_scale,w_605.png 605w,
                    /assets/images/people/people_ucizua_c_scale,w_774.png 774w"
              src="/assets/images/people/people_ucizua_c_scale,w_774.png"
              alt="People"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
