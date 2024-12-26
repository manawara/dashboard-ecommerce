import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";

//variables

export const DASHBOARD_CONFIG = "__DASHBOARD_CONFIG__";

export const generateToken = () => {
  const timestamp = Date.now().toString(36);
  const token = Math.random().toString(36).substring(2) + timestamp;
  return token;
};

export const handleLoginProvider = (provider = "google") => {
  signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
};
