import { useState, useRef } from 'react';

export default function useAlert(timeout = 5000, animationDuration = 1000) {
  const initialState = {
    show: false,
    type: '',
    title: '',
    content: '',
    animation: 'animateFadeIn',
    animationDuration: `${animationDuration / 1000}s`,
  };

  const [alertDetails, setAlertDetails] = useState({
    ...initialState,
  });

  const animationTimeout = timeout - animationDuration;

  const animationTimeoutRef = useRef(null);

  const timeoutRef = useRef(null);

  const closeAlert = (animation) => {
    clearTimeout(animationTimeoutRef.current);
    clearTimeout(timeoutRef.current);

    animationTimeoutRef.current = setTimeout(() => {
      setAlertDetails((prevState) => ({ ...prevState, animation }));
    }, animationTimeout);

    timeoutRef.current = setTimeout(() => {
      setAlertDetails((prevState) => ({ ...prevState, ...initialState }));
    }, timeout);
  };

  const openAlert = (details) => {
    setAlertDetails((prevState) => ({ ...prevState, ...details }));
  };

  // prettier-ignore
  const Alert = () => alertDetails?.show && (
  <div
    className={`animate ${alertDetails.animation}`}
    style={{ animationDuration: alertDetails.animationDuration }}
  >
    <div className={`alert p-3 ${alertDetails.type}`} role="alert">
      <h5 className="alert-heading mb-0 font-weight-normal">
        {alertDetails.title}
      </h5>
      <p className="font-size-1 mb-0">{alertDetails.content}</p>
    </div>
  </div>
  );

  return [closeAlert, openAlert, Alert];
}
