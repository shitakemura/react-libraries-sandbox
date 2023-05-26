import { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/lib/react-query'

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary
        fallback={<div>Something went wrong!</div>}
        onError={console.error}
      >
        {children}
      </ErrorBoundary>
    </QueryClientProvider>
  )
}
