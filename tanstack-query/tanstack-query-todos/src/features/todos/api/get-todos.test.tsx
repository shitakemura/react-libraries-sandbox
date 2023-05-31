import { waitFor } from '@testing-library/react'

import { useTodos } from './get-todos'

import { renderHook, wrapper } from '@/testing/testing-library-utils'

test('getTodos', async () => {
  const { result } = renderHook(() => useTodos(), { wrapper })

  await waitFor(() => expect(result.current.data).toHaveLength(5))

  expect(result.current.data).toEqual(
    expect.arrayContaining([
      { id: '1', title: 'todo 1', state: 'open' },
      { id: '2', title: 'todo 2', state: 'open' },
      { id: '3', title: 'todo 3', state: 'open' },
      { id: '4', title: 'todo 4', state: 'open' },
      { id: '5', title: 'todo 5', state: 'open' },
    ])
  )
})
