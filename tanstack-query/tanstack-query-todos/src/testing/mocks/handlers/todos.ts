import { rest } from 'msw'

import { db } from '../db'

export const todosHandlers = [
  // GET: /todos
  rest.get('http://localhost:3030/todos', (_, res, ctx) => {
    const todos = db.todo.findMany({})
    return res(ctx.delay(1000), ctx.status(200), ctx.json(todos))
  }),
]
