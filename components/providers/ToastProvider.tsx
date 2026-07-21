'use client';

import { Toaster } from 'sonner';

export function ToastProvider() {
  return (
    <Toaster 
      position="bottom-right" 
      toastOptions={{
        className: 'bg-background border-border text-foreground shadow-lg rounded-xl',
      }} 
    />
  );
}
