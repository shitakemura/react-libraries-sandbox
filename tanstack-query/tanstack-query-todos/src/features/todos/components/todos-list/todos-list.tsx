import { Todos } from '../../types'
import { TodoItem } from '../todo-item'

import { testData } from '@/testing/test-data'

export const TodosList = () => {
  const todos: Todos = testData.todos

  return (
    <>
      <h1>Todos List</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  )
}
