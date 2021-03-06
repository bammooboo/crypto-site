const emailValidation = (email) => {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
    return null;
  }

  if(!email) {
    return "Please enter an email address";
  }

  return "Please enter a valid email address";
};

const nameValidation = (name) => {
  if (!name) {
    return "Please enter a name";
  }

  return null;
};

const accountEmailValidation = (account) => {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(account)) {
    return null;
  }

  if(!account) {
    return "Please enter an email address";
  }

  return "Please enter a valid email address";
};

const handleValidation = (handle) => {
  if (!handle) {
    return "Please enter a Twitter handle";
  }

  return null;
};

export {
  nameValidation,
  emailValidation,
  accountEmailValidation,
  handleValidation
};