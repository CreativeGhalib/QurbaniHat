import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const clean = (value, fallback = "") =>
  (value || fallback)
    .replace(/\\r\\n/g, "")
    .replace(/[\r\n]/g, "")
    .replace(/^["']|["']$/g, "")
    .trim();

const mongoURI = clean(process.env.MONGO_URI, "mongodb://127.0.0.1:27017");
const appURL = clean(process.env.BETTER_AUTH_URL, "http://localhost:3000");
const googleClientId = clean(process.env.GOOGLE_CLIENT_ID, "placeholder-google-client-id");
const googleClientSecret = clean(process.env.GOOGLE_CLIENT_SECRET, "placeholder-google-client-secret");

const client = new MongoClient(mongoURI);
const db = client.db("qurbanihat");

export const auth = betterAuth({
  baseURL: {
    allowedHosts: ["localhost:3000", "qurbanihat-assignment-a8.vercel.app", "*.vercel.app"],
    protocol: "auto",
    fallback: appURL,
  },
  secret: clean(process.env.BETTER_AUTH_SECRET, "replace-this-dev-secret-in-production"),
  trustedOrigins: ["http://localhost:3000", "https://qurbanihat-assignment-a8.vercel.app", "https://*.vercel.app"],
  database: mongodbAdapter(db, {
    // Optional: passing client enables database transaction support.
    client,
  }),

  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },

  socialProviders: {
    google: {
      clientId: googleClientId,
      clientSecret: googleClientSecret,
      prompt: "select_account",
    },
  },
});
