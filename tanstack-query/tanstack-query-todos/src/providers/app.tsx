import { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type AppProviderProps = {
  children: ReactNode
}

const queryClient = new QueryClient()

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
