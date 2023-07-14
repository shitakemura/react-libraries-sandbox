import { useTodos } from '../../api/get-todos'
import { TodoItem } from '../todo-item'

export const TodosList = () => {
  const { data: todos, isLoading } = useTodos({ initialData: [] })

  if (isLoading) return <div>Loading...</div>

  return (
    <ul>
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
