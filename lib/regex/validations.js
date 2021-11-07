export default {
  singleName: /^[a-zA-Z\-']+$/,
  fullName: /^[a-zA-Z\-' ]+$/,
  email:
    /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/g,
  phone: /^[0-9-]+$/,
  message: /^[a-zA-Z\-_.,']+$/,
};
