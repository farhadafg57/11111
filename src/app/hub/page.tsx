'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// This page now serves as the entry point to the hub,
// automatically selecting the 'Oracle' as the default agent.
export default function HubEntryPoint() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/hub/oracle');
  }, [router]);


  // Return null or a loading indicator while redirecting
  return null;
}
