export const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

export const Actions = {
  submitForm: 'submit_form',
};

export const Categories = {
  contactUs: 'contact_us',
  jobApplication: 'job_application',
};

export const pageview = (url) => {
  window.gtag('config', GOOGLE_ANALYTICS_ID, {
    page_path: url,
  });
};

export const event = ({
  action, category, label, value,
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
