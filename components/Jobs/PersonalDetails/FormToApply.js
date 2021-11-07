import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import TextInput from '../../Form/Fields/TextInput';
import TextArea from '../../Form/Fields/TextArea';
import FileInput from '../../Form/Fields/FileInput';
import RadioGroup from '../../Form/Fields/RadioGroup';

import FormInputField from '../../Form/Hoc/FormInputField';

import OverlayLoader from '../../Common/OverlayLoader';

import slugify from '../../../lib/slugify';
import clearForm from '../../../lib/clearForm';
import useAlert from '../../../hooks/useAlert';
import useCaptcha from '../../../hooks/useCaptcha';

import api from '../../../api/index';

import { DropboxFileUploader } from '../../../lib/dropbox/DropboxFileUploader';

import * as gtag from '../../../lib/google/gtag';

const START_DATE = [
  {
    id: 1,
    value: 'Immediately',
    title: 'Immediately',
  },
  {
    id: 2,
    value: '1 week in advance',
    title: '1 week in advance',
  },
  {
    id: 3,
    value: '2 weeks in advance',
    title: '2 weeks in advance',
  },
  {
    id: 4,
    value: 'One month in advance',
    title: 'One month in advance',
  },
  {
    id: 5,
    value: '',
    title: 'Other:',
  },
];

const HOW_DID_YOU_HEAR = [
  {
    id: 1,
    value: 'DevCenter',
    title: 'DevCenter',
  },
  {
    id: 2,
    value: 'LinkedIn',
    title: 'LinkedIn',
  },
  {
    id: 3,
    value: 'StackOverflow',
    title: 'StackOverflow',
  },
  {
    id: 4,
    value: 'GitHub',
    title: 'GitHub',
  },
  {
    id: 5,
    value: 'Word of mouth',
    title: 'Word of mouth',
  },
  {
    id: 6,
    value: '',
    title: 'Other:',
  },
];

const CAPTCHA_ID = 'formToApplyCaptcha';

const initialState = {
  firstName: {
    value: '',
    isValid: false,
    optional: false,
    interacted: false,
  },
  lastName: {
    value: '',
    isValid: false,
    optional: false,
    interacted: false,
  },
  preferredName: {
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
  preferredPronoun: {
    value: '',
    isValid: false,
    optional: false,
    interacted: false,
  },
  startTime: {
    value: '',
    isValid: false,
    optional: false,
    interacted: false,
  },
  doneProjects: {
    value: '',
    isValid: false,
    optional: true,
    interacted: false,
  },
  githubProfile: {
    value: '',
    isValid: false,
    optional: false,
    interacted: false,
  },
  linkedInProfile: {
    value: '',
    isValid: false,
    optional: false,
    interacted: false,
  },
  howDidYouHear: {
    value: '',
    isValid: false,
    optional: false,
    interacted: false,
  },
  resume: {
    value: null,
    isValid: false,
    optional: false,
    interacted: false,
  },
};

const ALERT_TIMEOUT = 10000;

const DROPBOX_FOLDER = `https://www.dropbox.com/home/Apps/${process.env.NEXT_PUBLIC_DROPBOX_APP_NAME}`;

export default function FormToApply() {
  const { query } = useRouter();

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

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const jobSlug = query.id;

    gtag.event({
      action: gtag.Actions.submitForm,
      category: gtag.Categories.jobApplication,
      label: jobSlug,
    });

    setLoading(true);

    const form = e.target;

    const resumeFileName = formFields.resume.value.name.split('.');

    // get file name extension
    const resumeFileExt = resumeFileName.pop();

    const savedResumeName = slugify(
      `${formFields.firstName.value}-${formFields.lastName.value}-${
        formFields.email.value
      }-${resumeFileName.join()}`,
    );

    const uploader = new DropboxFileUploader(
      formFields.resume.value,
      `${savedResumeName}.${resumeFileExt}`,
      jobSlug,
    );

    try {
      const uploadResp = await uploader.upload();

      const cvPath = uploadResp?.result?.path_lower;

      const formFieldsFinal = {
        ...formFields,
        ResumeURL: {
          value: `${DROPBOX_FOLDER}${cvPath}`,
        },
        jobID: {
          value: jobSlug,
        },
      };

      // data to send to google script api
      const formData = new FormData();

      const fields = Object.keys(formFieldsFinal);

      // collect and store field values to formData
      fields.forEach((key) => {
        if (key === 'resume') {
          const resumeName = formFieldsFinal[key]?.value.name;

          formData.append(key, resumeName);
        } else {
          formData.append(key, formFieldsFinal[key]?.value);
        }
      });

      // determines the field names google script saves
      formData.append('formDataNameOrder', JSON.stringify(fields));

      // default google sheet name to save data
      formData.append('formGoogleSheetName', 'responses');

      // email to send data to (for security, default from google script)
      formData.append('formGoogleSendEmail', '');

      await api.sendApplicationEmail(formData);

      openAlert({
        show: true,
        type: 'alert-success',
        title: 'Application Submitted!',
        content: 'We will get in touch',
      });
      setFormFields({ ...initialState });
      clearForm(form.elements);
    } catch (err) {
      openAlert({
        show: true,
        type: 'alert-danger',
        title: 'Sorry!',
        content: 'Something went wrong, try again',
      });
      // TODO: Use appropriate error class
      throw err;
    } finally {
      setLoading(false);
      closeAlert('animateFadeOut');
    }
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

  const renderTextInput = (data) => <TextInput {...data} />;

  const renderTextArea = (data) => <TextArea {...data} />;

  return (
    <div className="border-top mt-8 mb-3 position-relative">
      <a id="apply" href="/#" className="sr-only">
        Application Form
      </a>
      <h2 className="text-center mt-5 mb-5 mb-md-9 font-weight-normal">
        Apply for this Job
      </h2>
      <div className="container">
        {/* Apply Form */}
        <form onSubmit={onSubmitForm}>
          <div className="row">
            <div className="col-md-6 px-0 px-sm-3">
              <FormInputField
                render={renderTextInput}
                name="firstName"
                id="firstName"
                label="First Name"
                type="text"
                required
                value={formFields.firstName.value}
                isValid={formFields.firstName.isValid}
                interacted={formFields.firstName.interacted}
                onChange={updateFormFields}
                errorMessage="We need your first name"
                successMessage="Looking good!"
              />
            </div>
            <div className="col-md-6 px-0 px-sm-3">
              <FormInputField
                render={renderTextInput}
                name="lastName"
                id="lastName"
                label="Last Name"
                type="text"
                required
                value={formFields.lastName.value}
                isValid={formFields.lastName.isValid}
                interacted={formFields.lastName.interacted}
                onChange={updateFormFields}
                errorMessage="We need your last name"
                successMessage="Looking good!"
              />
            </div>
            <div className="col-md-6 px-0 px-sm-3">
              <FormInputField
                render={renderTextInput}
                name="preferredName"
                id="preferredName"
                label="Preferred Name"
                type="text"
                required
                value={formFields.preferredName.value}
                isValid={formFields.preferredName.isValid}
                interacted={formFields.preferredName.interacted}
                onChange={updateFormFields}
                errorMessage="We need your preferred name"
                successMessage="Looking good!"
              />
            </div>
            <div className="col-md-6 px-0 px-sm-3">
              <FormInputField
                render={renderTextInput}
                name="preferredPronoun"
                id="preferredPronoun"
                label="Preferred Pronoun"
                type="text"
                required
                value={formFields.preferredPronoun.value}
                isValid={formFields.preferredPronoun.isValid}
                interacted={formFields.preferredPronoun.interacted}
                onChange={updateFormFields}
                errorMessage="We need your preferred pronoun"
                successMessage="Looking good!"
              />
            </div>
            <div className="col-md-6 px-0 px-sm-3">
              <FormInputField
                render={renderTextInput}
                name="email"
                id="email"
                label="Email Address"
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
            <div className="col-12 px-0 px-sm-3">
              <RadioGroup
                name="startTime"
                label="How soon can you start if hired?"
                options={START_DATE}
                required
                isValid={formFields.startTime.isValid}
                interacted={formFields.startTime.interacted}
                onChange={updateFormFields}
              />
            </div>
            <div className="col-12 px-0 px-sm-3">
              <FormInputField
                render={renderTextArea}
                name="doneProjects"
                id="doneProjects"
                label="Any interesting project you'd like to share? (Optional)"
                rows={4}
                maxLength={500}
                value={formFields.doneProjects.value}
                isValid={formFields.doneProjects.isValid}
                interacted={formFields.doneProjects.interacted}
                onChange={updateFormFields}
                errorMessage="Don't be shy, we won't poke"
                successMessage="Thank you!"
              />
            </div>
            <div className="col-md-6 px-0 px-sm-3">
              <FormInputField
                render={renderTextInput}
                name="githubProfile"
                id="githubProfile"
                label="Github Profile"
                type="url"
                required
                browserValidate
                value={formFields.githubProfile.value}
                isValid={formFields.githubProfile.isValid}
                interacted={formFields.githubProfile.interacted}
                onChange={updateFormFields}
                errorMessage="We don't stalk, Promise"
                successMessage="Looking good!"
              />
            </div>
            <div className="col-md-6 px-0 px-sm-3">
              <FormInputField
                render={renderTextInput}
                name="linkedInProfile"
                id="linkedInProfile"
                label="LinkedIn Profile"
                type="url"
                required
                browserValidate
                value={formFields.linkedInProfile.value}
                isValid={formFields.linkedInProfile.isValid}
                interacted={formFields.linkedInProfile.interacted}
                onChange={updateFormFields}
                errorMessage="We don't stalk, Promise"
                successMessage="Looking good!"
              />
            </div>
            <div className="col-12 px-0 px-sm-3">
              <RadioGroup
                name="howDidYouHear"
                label="How did you hear about this position?"
                options={HOW_DID_YOU_HEAR}
                required
                isValid={formFields.howDidYouHear.isValid}
                interacted={formFields.howDidYouHear.interacted}
                onChange={updateFormFields}
              />
            </div>
            <div className="col-12 px-0 px-sm-3">
              <FileInput
                id="resume"
                name="resume"
                label="Résumé/CV (PDF only)"
                required
                maxSizeMb={1}
                file={formFields.resume.value}
                isValid={formFields.resume.isValid}
                onChange={updateFormFields}
                accept="application/pdf"
                errorMessage="File should be PDF and 1MB or less"
                successMessage="Looks good!"
              />
            </div>
          </div>
          <div
            className="mb-3 d-flex justify-content-center"
            id={CAPTCHA_ID}
          />
          <div className="text-center mt-7">
            <button
              type="submit"
              className="btn btn--primary transition-3d-hover font-weight-normal text-white"
              disabled={!canSubmitForm || loading}
            >
              Submit Application
            </button>
          </div>
          <Alert />
        </form>
        {/* End Apply Form */}
      </div>
      {loading && <OverlayLoader />}
    </div>
  );
}
