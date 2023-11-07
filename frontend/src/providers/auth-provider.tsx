'use client';

import { SessionProvider } from 'next-auth/react';

interface AuthProviderProp {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProp ) => {
  return (
    <SessionProvider> 
      {children}
    </SessionProvider>
  )
}