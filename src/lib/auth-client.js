import { createAuthClient } from "better-auth/react";

const clean = (value, fallback = "") =>
  (value || fallback)
    .replace(/\\r\\n/g, "")
    .replace(/[\r\n]/g, "")
    .replace(/^["']|["']$/g, "")
    .trim();

const getBaseURL = () => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  const envBase = clean(process.env.NEXT_PUBLIC_APP_URL, "");
  if (envBase) {
    return envBase;
  }

  return "http://localhost:3000";
};

export const authClient = createAuthClient({
  baseURL: getBaseURL(),
});

export const { signIn, signOut, signUp, updateUser, useSession } = authClient;
