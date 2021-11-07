import Link from 'next/link';
import styles from '../../styles/Card.module.css';

export default function Card(props) {
  const { src, header, slugID } = props;
  return (
    <div className="row">
      <div className={`${styles.card} ${styles.box}`}>
        <div className="box">
          <img className="img-fluid" src={src} alt="People" />

          <div className={`${styles.cardBottom}`}>
            <h1 className={`${styles.cardHeader} font-weight-normal`}>
              {header}
            </h1>

            <div
              style={{
                marginLeft: 10,
              }}
              className={`${styles.arrowView} row`}
            >
              <h1 className={`${styles.cardBody} font-weight-normal`}>
                <Link href="/job/[id]" as={`/job/${slugID}`}>
                  <a href={`/job/${slugID}`} className="text-orange">
                    Apply
                  </a>
                </Link>
              </h1>

              <img
                className={`img-fluid ${styles.angleRight}`}
                src="/assets/svg/arrow.svg"
                alt="Arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
