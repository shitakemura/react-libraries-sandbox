import { testData } from '../test-data'

import { db } from './db'

export const seedDb = () => {
  const todoCount = db.todo.count()

  if (todoCount > 0) return

  testData.todos.forEach((todo) => db.todo.create(todo))
}
