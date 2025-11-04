'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore'

// IMPORTANT: DO NOT MODIFY THIS FUNCTION
export function initializeFirebase(): { firebaseApp: FirebaseApp; auth: Auth; firestore: Firestore; } {
  if (getApps().length > 0) {
    const app = getApp();
    return getSdks(app);
  }

  // Firebase App Hosting integrates with initializeApp() to provide the necessary
  // environment variables for production. During local development, these may
  // not be present, so we fall back to the explicit config object.
  try {
    const app = initializeApp();
    return getSdks(app);
  } catch (e) {
    if (process.env.NODE_ENV === 'production') {
        console.warn('Automatic Firebase initialization failed, falling back to config. This might indicate a missing App Hosting backend.', e);
    }
    const app = initializeApp(firebaseConfig);
    return getSdks(app);
  }
}

export function getSdks(firebaseApp: FirebaseApp) {
  return {
    firebaseApp,
    auth: getAuth(firebaseApp),
    firestore: getFirestore(firebaseApp)
  };
}

export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';
