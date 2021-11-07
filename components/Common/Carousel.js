import React, { useState, useEffect, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import styles from '../../styles/Carousel.module.css';
import Card from './Card';
import { JobRepository } from '../../data/Repository/Job/JobRepository';
import { makeJobSlugID } from '../../data/Repository/utils';

const hasWindow = typeof window !== 'undefined';

const getWindowDimensions = () => {
  const width = hasWindow ? window.innerWidth : null;
  const height = hasWindow ? window.innerHeight : null;
  return {
    width,
    height,
  };
};

export default function Carousel() {
  const [randomJobs] = useState(JobRepository.getRandomActiveJobs());

  if (randomJobs.length < 1) {
    return <div className="mt-5 justify-content-center container px-auto" />;
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  const useWindowDimensions = () => {
    getWindowDimensions();
    return windowDimensions;
  };

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  };

  useEffect(() => {
    if (hasWindow) {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [hasWindow]);

  const { width } = useWindowDimensions();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: width > 1000 ? 3 : 1,
    mode: 'free',
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    dragStart() {
      setPause(true);
    },
    dragEnd() {
      setPause(false);
    },
  });

  useEffect(() => {
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true);
    });
    sliderRef.current.addEventListener('mouseout', () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 4000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  const onPrevClicked = (e) => e.stopPropagation() || slider.prev();

  const onNextClicked = (e) => e.stopPropagation() || slider.next();

  return (
    <div className="mt-5 justify-content-center container">
      <div className={`space-top-sm-1 mx-auto ${styles.cardWrapper}`}>
        <div ref={sliderRef} className="keen-slider">
          {randomJobs.map((job, index) => (
            <div
              className={`keen-slider__slide number-slide${index + 1}`}
              key={job.id}
            >
              <Card
                src={job.thumbnail}
                header={`${job.title}`}
                slugID={makeJobSlugID(job.slug, job.id)}
              />
            </div>
          ))}
        </div>

        {slider && (
          <>
            <div className={`${styles.arrows} row`}>
              {currentSlide === 0 ? (
                <button
                  type="button"
                  onClick={onPrevClicked}
                  className={`${styles.arrowRow}`}
                >
                  <img
                    className="img-fluid"
                    src="/assets/svg/arrow.svg"
                    alt="Arrow Left Disabled"
                  />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onPrevClicked}
                  className={`${styles.arrowRow}`}
                >
                  <img
                    className={`img-fluid ${styles.imageReverse}`}
                    src="/assets/svg/arrowRight.svg"
                    alt="Arrow Right"
                  />
                </button>
              )}

              {currentSlide === slider.details().size - 1 ? (
                <button
                  type="button"
                  onClick={onNextClicked}
                  className={`${styles.arrowRow}`}
                >
                  <img
                    className={`img-fluid ${styles.imageReverse}`}
                    src="/assets/svg/arrow.svg"
                    alt="Arrow Left"
                  />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onNextClicked}
                  className={`${styles.arrowRow}`}
                >
                  <img
                    className="img-fluid"
                    src="/assets/svg/arrowRight.svg"
                    alt="Arrow Right Disabled"
                  />
                </button>
              )}
            </div>
          </>
        )}

        <div className={`${styles.dots} row`}>
          <img
            className={`img-fluid ${styles.dotsImage}`}
            src="/assets/images/dots.png"
            alt="People"
          />
        </div>
      </div>
    </div>
  );
}
