// Firebase configuration - using environment variables for security
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDZHmynBAMKKc0Api6215_tJdBvndw0t0I",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "afghan-ai-c1596.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "afghan-ai-c1596",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "afghan-ai-c1596.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "38927823947",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:38927823947:web:2d2b591b10de6321684d53",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-K5G52YSZ79"
};
