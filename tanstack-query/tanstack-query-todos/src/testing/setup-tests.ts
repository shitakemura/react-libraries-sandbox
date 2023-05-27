import '@testing-library/jest-dom/extend-expect'

import { dropDb } from './mocks/drop-db'

import { queryClient } from '@/lib/react-query'
import { seedDb } from '@/testing/mocks/seed-db'
import { server } from '@/testing/mocks/server'

beforeEach(() => {
  dropDb()
  server.listen({ onUnhandledRequest: 'error' })
  seedDb()
})

afterAll(() => server.close())

afterEach(async () => {
  queryClient.clear()
  server.resetHandlers()
})
