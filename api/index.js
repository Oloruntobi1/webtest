export default {
  sendContactUsEmail: async (payload) => {
    try {
      const resp = await fetch(process.env.NEXT_PUBLIC_CONTACT_US_URL, {
        method: 'POST',
        body: payload,
      });

      return resp.statusText;
    } catch (e) {
      // TODO: This is too generic use a specific Error class
      throw new Error(e);
    }
  },
  sendApplicationEmail: async (payload) => {
    try {
      const resp = await fetch(process.env.NEXT_PUBLIC_JOB_APPLICATION_URL, {
        method: 'POST',
        body: payload,
      });

      return resp.statusText;
    } catch (e) {
      // TODO: This is too generic use a specific Error class
      throw new Error(e);
    }
  },
};
