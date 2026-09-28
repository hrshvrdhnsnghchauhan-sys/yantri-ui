import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0ObizP--zyYUq9inwStpvxyCwlWnSzDQ",
  authDomain: "yantri-os.firebaseapp.com",
  projectId: "yantri-os",
  storageBucket: "yantri-os.firebasestorage.app",
  messagingSenderId: "1054740008640",
  appId: "1:1054740008640:web:04e2ad90dd42f92be7e725",
  measurementId: "G-8YGX62DMEY"
};

// Initialize Firebase (with check for Next.js hot-reloads)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
