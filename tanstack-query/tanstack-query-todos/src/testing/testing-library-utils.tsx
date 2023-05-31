// MEMO: https://testing-library.com/docs/react-testing-library/setup/#custom-render
import { ReactElement, ReactNode } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RenderOptions, render } from '@testing-library/react'

import { AppProvider } from '@/providers/app'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wapper'>
) => render(ui, { wrapper: AppProvider, ...options })

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // set false for test
    },
  },
})

// wrapper to use test for React Query hook
const customWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export * from '@testing-library/react'

export { customRender as render }
export { customWrapper as wrapper }
