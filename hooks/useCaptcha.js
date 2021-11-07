import { useState, useCallback } from 'react';

import Recaptcha from 'react-recaptcha';

export default function useCaptcha() {
  const [captchaIsValid, setCaptchaIsValid] = useState(false);

  const onVerifyCaptcha = useCallback(() => {
    setCaptchaIsValid(true);
  }, []);

  const onExpiredCaptcha = useCallback(() => {
    setCaptchaIsValid(false);
  }, []);

  const Captcha = useCallback(
    () => (
      <Recaptcha
        sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
        size="normal"
        verifyCallback={onVerifyCaptcha}
        expiredCallback={onExpiredCaptcha}
      />
    ),
    [],
  );

  return [captchaIsValid, Captcha];
}
