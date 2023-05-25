import { rest } from 'msw'

import { Todos } from '@/features/todos'

const todos: Todos = [
  { id: 1, title: 'todo 1', state: 'open' },
  { id: 2, title: 'todo 2', state: 'open' },
  { id: 3, title: 'todo 3', state: 'open' },
]

export const todosHandlers = [
  rest.get('/todos', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos))
  }),
]
