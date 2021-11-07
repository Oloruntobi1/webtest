import ReactDOM from 'react-dom';
import { useCallback, useEffect, useState } from 'react';

import TextInput from '../../Form/Fields/TextInput';
import TextArea from '../../Form/Fields/TextArea';
import InputWithDropdown from '../../Form/Fields/InputWithDropdown';
import FormInputField from '../../Form/Hoc/FormInputField';
import CountryCodesSelect from '../../Form/Fields/CountryCodesSelect';

import OverlayLoader from '../../Common/OverlayLoader';

import useAlert from '../../../hooks/useAlert';
import useCaptcha from '../../../hooks/useCaptcha';

import api from '../../../api/index';

import * as gtag from '../../../lib/google/gtag';

const ALERT_TIMEOUT = 10000;

const CAPTCHA_ID = 'contactUsCaptcha';

const initialState = {
  name: {
    value: '',
    isValid: false,
    optional: false,
    interacted: false,
  },
  email: {
    value: '',
    isValid: false,
    optional: false,
    interacted: false,
  },
  phone: {
    value: '',
    countryCode: '+1',
    isValid: false,
    optional: true,
    interacted: false,
  },
  message: {
    value: '',
    isValid: false,
    optional: false,
    interacted: false,
  },
};

export default function ContactUsForm() {
  const [formFields, setFormFields] = useState({
    ...initialState,
  });

  const [loading, setLoading] = useState(false);

  const [closeAlert, openAlert, Alert] = useAlert(ALERT_TIMEOUT);

  const [captchaIsValid, Captcha] = useCaptcha();

  // constant that determines if all the form fields are valid, i.e isValid === true
  // prettier-ignore
  const canSubmitForm = Object.values(formFields).every(
    (field) => field.isValid || field.optional,
  ) && captchaIsValid;

  useEffect(() => {
    ReactDOM.render(<Captcha />, document.getElementById(CAPTCHA_ID));
  }, []);

  const onSubmitForm = (e) => {
    e.preventDefault();

    gtag.event({
      action: gtag.Actions.submitForm,
      category: gtag.Categories.contactUs,
      label: formFields.phone.countryCode,
    });

    setLoading(true);

    // data to send to api
    const formData = new FormData();

    const fields = Object.keys(formFields);

    // collect and store field values to formData
    fields.forEach((key) => {
      if (key === 'phone') {
        formData.append(
          key,
          `(${formFields[key]?.countryCode})${formFields[key]?.value}`,
        );
      } else {
        formData.append(key, formFields[key]?.value);
      }
    });

    // determines the field names google script saves
    formData.append('formDataNameOrder', JSON.stringify(fields));

    // default google sheet name to save data
    formData.append('formGoogleSheetName', 'responses');

    // email to send data to (for security, default from google script)
    formData.append('formGoogleSendEmail', '');

    // send data
    api
      .sendContactUsEmail(formData)
      .then(() => {
        openAlert({
          show: true,
          type: 'alert-success',
          title: 'Message sent!',
          content: 'We will contact you shortly',
        });
        setFormFields({ ...initialState });
      })
      .catch(() => {
        openAlert({
          show: true,
          type: 'alert-danger',
          title: 'Sorry!',
          content: "We couldn't deliver your message, try again",
        });
      })
      .finally(() => {
        setLoading(false);
        closeAlert('animateFadeOut');
      });
  };

  // callback to update form state values
  const updateFormFields = (name, value, isValid) => {
    setFormFields((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
        isValid,
        interacted: true,
      },
    }));
  };

  const updateCountryCode = useCallback((e) => {
    const countryCode = e.target.value;

    setFormFields((prevState) => ({
      ...prevState,
      phone: {
        ...prevState.phone,
        countryCode,
      },
    }));
  }, []);

  // prettier-ignore
  const CountryCodesDropdown = useCallback(
    () => (
      <CountryCodesSelect
        value={formFields.phone.countryCode}
        onChange={updateCountryCode}
      />
    ),
    [formFields.phone.countryCode, updateCountryCode],
  );

  const renderTextInput = (data) => <TextInput {...data} />;

  const renderTextArea = (data) => <TextArea {...data} />;

  const renderInputWithDropdown = (data) => <InputWithDropdown {...data} />;

  return (
    <div className="position-relative">
      <form className="card shadow-lg mb-4 mb-lg-0" onSubmit={onSubmitForm}>
        <div className="card-body p-4 p-md-6">
          <div className="row pt-2">
            <div className="col-12">
              <FormInputField
                render={renderTextInput}
                name="name"
                id="name"
                label="Full Name"
                placeholder="e.g John Doe"
                type="text"
                required
                value={formFields.name.value}
                isValid={formFields.name.isValid}
                interacted={formFields.name.interacted}
                onChange={updateFormFields}
                errorMessage="We need your first name (at least)"
                successMessage="Looking good!"
              />
            </div>
            <div className="col-12">
              <FormInputField
                render={renderTextInput}
                name="email"
                id="email"
                label="Email address"
                placeholder="Enter email address"
                type="email"
                required
                browserValidate
                value={formFields.email.value}
                isValid={formFields.email.isValid}
                interacted={formFields.email.interacted}
                onChange={updateFormFields}
                errorMessage="Your email is needed to get in touch"
                successMessage="Looking good!"
              />
            </div>
            <div className="col-12">
              <FormInputField
                render={renderInputWithDropdown}
                name="phone"
                id="phone"
                label="Telephone number"
                placeholder="Enter phone number"
                type="tel"
                value={formFields.phone.value}
                isValid={formFields.phone.isValid}
                interacted={formFields.phone.interacted}
                onChange={updateFormFields}
                errorMessage="Your telephone? number is not valid"
                successMessage="Looking good!"
                renderDropdown={CountryCodesDropdown}
              />
            </div>
            <div className="col-12">
              <FormInputField
                render={renderTextArea}
                name="message"
                id="message"
                label="Message"
                rows={4}
                maxLength={400}
                required
                value={formFields.message.value}
                isValid={formFields.message.isValid}
                interacted={formFields.message.interacted}
                onChange={updateFormFields}
                errorMessage="Don't be shy, we won't bite"
                successMessage="Looking forward to it!"
              />
            </div>
          </div>
          <div className="mb-3 d-flex justify-content-center" id={CAPTCHA_ID} />
          <button
            type="submit"
            className="btn btn-block btn--primary transition-3d-hover font-weight-normal text-white"
            disabled={!canSubmitForm || loading}
          >
            Send Message
          </button>
          <Alert />
        </div>
      </form>
      {loading && <OverlayLoader />}
    </div>
  );
}
