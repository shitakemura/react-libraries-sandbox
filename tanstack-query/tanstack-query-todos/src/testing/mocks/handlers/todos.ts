import { rest } from 'msw'

import { testData } from '@/testing/test-data'

export const todosHandlers = [
  rest.get('/todos', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(testData.todos))
  }),
]
