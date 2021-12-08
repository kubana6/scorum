import { EMAIL, PASSWORD } from "../../constants"

export const signIn = (data) => {
  const isVerification = data.email === EMAIL && data.password === PASSWORD;

  return isVerification;
};
