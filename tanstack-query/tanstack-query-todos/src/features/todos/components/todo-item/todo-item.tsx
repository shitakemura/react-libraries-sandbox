import { useDeleteTodo } from '../../api/delete-todo'
import { Todo } from '../../types'

type Props = Todo

export const TodoItem = ({ id, title }: Props) => {
  const deleteTodo = useDeleteTodo({ todoId: id })
  const handleDelete = () => deleteTodo.submit()

  return (
    <li>
      {title} <button onClick={handleDelete}>Delete</button>
    </li>
  )
}
