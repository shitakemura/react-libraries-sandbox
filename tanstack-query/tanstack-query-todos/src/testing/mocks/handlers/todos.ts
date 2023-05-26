import { db } from '../db'

// MEMO: https://github.com/mswjs/data#tohandlers
export const todosHandlers = db.todo.toHandlers('rest')
