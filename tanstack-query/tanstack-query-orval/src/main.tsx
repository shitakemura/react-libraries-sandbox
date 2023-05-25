import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { worker } from './mocks/browser.ts'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import PetsListPage from './pages/PetsListPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate replace to="/pets" />,
  },
  {
    path: '/pets',
    element: <PetsListPage />,
  },
])

const queryClient = new QueryClient()

if (process.env.NODE_ENV === 'development') {
  worker.start().catch((error) => console.log(error))
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
