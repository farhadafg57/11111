'use client';

import { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';
import { useToast } from '@/hooks/use-toast';
import { FirestorePermissionError } from '@/firebase/errors';
import { Button } from './ui/button';

export function FirebaseErrorListener() {
  const { toast } = useToast();

  useEffect(() => {
    const handlePermissionError = (error: FirestorePermissionError) => {
      console.error(error); // Also log to console for good measure

      toast({
        variant: 'destructive',
        title: 'Firestore Permission Error',
        description: (
          <div className="flex flex-col gap-2">
            <p>Your request was denied by Firestore Security Rules.</p>
            <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
              <code className="text-white text-xs">{JSON.stringify(error.request, null, 2)}</code>
            </pre>
            <Button
              size="sm"
              onClick={() => navigator.clipboard.writeText(JSON.stringify(error.request, null, 2))}
            >
              Copy Details
            </Button>
          </div>
        ),
        duration: Infinity, // Keep the toast open until dismissed
      });
    };

    errorEmitter.on('permission-error', handlePermissionError);

    return () => {
      errorEmitter.off('permission-error', handlePermissionError);
    };
  }, [toast]);

  return null; // This component does not render anything itself
}
