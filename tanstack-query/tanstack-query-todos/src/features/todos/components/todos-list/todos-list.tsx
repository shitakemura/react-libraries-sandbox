import { Todos } from '../../types'
import { TodoItem } from '../todo-item'

export const TodosList = () => {
  const todos: Todos = [
    { id: 1, title: 'todo 1', state: 'open' },
    { id: 2, title: 'todo 2', state: 'open' },
    { id: 3, title: 'todo 3', state: 'open' },
  ]
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
