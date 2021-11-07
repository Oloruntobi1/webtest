import { useRef } from 'react';

import Link from 'next/link';

import { useRouter } from 'next/router';

import styles from '../../../styles/JobDescription.module.css';

import useAlert from '../../../hooks/useAlert';

const ALERT_TIMEOUT = 5000;

// prettier-ignore
const BASE_URL = typeof window !== 'undefined'
  ? window.location.origin
  : 'https://10hourlabs.com';

export default function JobDescriptionSection({ data }) {
  const { asPath } = useRouter();

  const shareUrlField = useRef(null);

  const [closeAlert, openAlert, Alert] = useAlert(ALERT_TIMEOUT);

  const applyFormLink = asPath.endsWith('#apply') ? asPath : `${asPath}#apply`;

  const jobUrl = BASE_URL + asPath;

  // const shareUrl = encodeURIComponent(jobUrl);

  const onCopyLink = () => {
    shareUrlField.current.value = jobUrl;
    shareUrlField.current.select();
    shareUrlField.current.setSelectionRange(0, 99999);
    document.execCommand('copy');

    openAlert({
      show: true,
      type: 'alert-info',
      content:
        'Job Link copied to clipboard, you can now share with your network',
      animation: 'animateBounceIn',
    });

    closeAlert('animateBounceOut');
  };

  /* prettier-ignore */
  return (
    <div>
      <div className={`${styles.topDiv} row mx-auto`}>
        <div>
          <h1 className={`${styles.title} font-weight-normal`}>
            {data && data.title}
            {' '}
            {data && `(${data.category})`}
          </h1>

          <h1 className={`${styles.subTitle} font-weight-normal`}>
            {data && data.type}
            {' '}
            {data && `-${data.location}`}
          </h1>
        </div>

        <div className="d-flex align-items-center">
          <div className="dropdown dropright">
            <button className="btn " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img
                className={`${styles.share} img-fluid`}
                src="/assets/svg/share.svg"
                alt="Share"
              />
            </button>
            <ul className="dropdown-menu py-0 rounded" aria-labelledby="dropdownMenuButton">
              <li>
                <button type="button" className="btn dropdown-item" onClick={onCopyLink}>
                  <img
                    className="img-fluid"
                    src="/assets/svg/icons/copy.svg"
                    alt="Share"
                    height={16}
                    width={16}
                  />
                  <span className="d-inline-block ml-2">Copy link</span>
                </button>
              </li>
              {/* <li>
                <a href="https://twitter.com/10hourlabs" target="_blank" rel="noreferrer noopener" type="button" className="btn dropdown-item">
                  <img
                    className="img-fluid"
                    src="/assets/svg/icons/tttt.svg"
                    alt="Share"
                    height={16}
                    width={16}
                  />
                  <span className="d-inline-block ml-2">Twitter</span>
                </a>
              </li>
              <li>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}%2F&amp;src=sdkpreparse`} target="_blank" rel="noreferrer noopener" type="button" className="btn dropdown-item">
                  <img
                    className="img-fluid"
                    src="/assets/svg/icons/ffff-circle.svg"
                    alt="Share"
                    height={16}
                    width={16}
                  />
                  <span className="d-inline-block ml-2">Facebook</span>
                </a>
              </li> */}
            </ul>
          </div>

          <Link href={applyFormLink} aria-label="Apply now">
            <a
              href={applyFormLink}
              className={`btn btn--primary ${styles.apply} font-weight-normal align-self-center text-white`}
            >
              Apply now
            </a>
          </Link>
        </div>
      </div>

      <div className="mt-6 mx-auto">
        <h1 className={`${styles.topSection} font-weight-normal`}>
          {data && data.summary}
        </h1>
      </div>

      <h1 className={`${styles.title} mt-6 font-weight-normal`}>We have:</h1>

      <ul>
        {data
          && data.weHave
          && data.weHave.map((item, i) => (
            <li key={i.toString()}>
              <h1 className={`${styles.topSection} font-weight-normal`}>
                {item}
              </h1>
            </li>
          ))}
      </ul>

      <h1 className={`${styles.title} mt-6 font-weight-normal`}>
        Requirements:
      </h1>

      <ul>
        {data
          && data.requirements
          && data.requirements.map((item, i) => (
            <li key={i.toString()}>
              <h1 className={`${styles.topSection} font-weight-normal`}>
                {item}
              </h1>
            </li>
          ))}
      </ul>

      <h1 className={`${styles.title} mt-6 font-weight-normal`}>You have:</h1>

      <ul>
        {data
          && data.youHave
          && data.youHave.map((item, i) => (
            <li key={i.toString()}>
              <h1 className={`${styles.topSection} font-weight-normal`}>
                {item}
              </h1>
            </li>
          ))}
      </ul>

      {data && data.bonus
        && (
        <>
          <h1 className={`${styles.title} mt-6 font-weight-normal`}>Bonus:</h1>

          <ul>
            {data.bonus.map((item, i) => (
              <li key={i.toString()}>
                <h1 className={`${styles.topSection} font-weight-normal`}>
                  {item}
                </h1>
              </li>
            ))}
          </ul>
        </>
        )}
      <input type="text" name="ShareUrl" readOnly className="sr-only" ref={shareUrlField} />
      <div
        className="snackbar-container px-3"
      >
        <Alert />
      </div>
    </div>
  );
}
