import Validator from "Validator";

export const validateEmail = (email) => {
  Validator.isEmail(email);
  const reg = /[a-z._]{1}[a-z0-9]*@[a-z0-9].[a-z.]/gi;
  return email.match(reg);
};
