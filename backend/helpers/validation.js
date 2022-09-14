export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/);
};

export const validatePassword = (password) => {
  return String(password)
    .match(/^.*(?=.{8,})(?=.*[A-Z]).*$/);
};

