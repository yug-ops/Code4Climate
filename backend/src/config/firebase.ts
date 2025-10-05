import admin, { ServiceAccount } from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Missing required environment variable: ${key}`);
  return value;
}

const serviceAccount: ServiceAccount = {
  projectId: requireEnv('FIREBASE_PROJECT_ID'),
  clientEmail: requireEnv('FIREBASE_CLIENT_EMAIL'),
  privateKey: requireEnv('FIREBASE_PRIVATE_KEY').replace(/\\n/g, '\n'),
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export { admin };

// ✅ Explicit types and renamed to avoid collision
export const db: admin.firestore.Firestore = admin.firestore();
export const firebaseAuth: admin.auth.Auth = admin.auth();