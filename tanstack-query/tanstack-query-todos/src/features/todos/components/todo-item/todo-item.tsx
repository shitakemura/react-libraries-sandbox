import { ChangeEvent, useState } from 'react'

import { useDeleteTodo } from '../../api/delete-todo'
import { useUpdateTodoTitle } from '../../api/update-todo-title'
import { Todo, UpdateTodoData } from '../../types'

type Props = Todo

export const TodoItem = ({ id, title, state }: Props) => {
  const [editing, setEditing] = useState(false)
  const [editingTitle, setEditingTitle] = useState(title)

  const finishEditing = () => {
    setEditingTitle(title)
    setEditing(false)
  }

  const updateTodoTitle = useUpdateTodoTitle({ onSuccess: finishEditing })
  const deleteTodo = useDeleteTodo({ todoId: id })

  const handleClickEdit = () => setEditing(true)
  const handleClickDelete = () => deleteTodo.submit()

  const handleDoneEdit = () => {
    const data: UpdateTodoData = { title: editingTitle, state }
    updateTodoTitle.submit({ todoId: id, data })
  }
  const handleCancelEdit = finishEditing

  const handleChangeEditTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setEditingTitle(event.target.value)
  }

  return (
    <li>
      {editing ? (
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            type="text"
            value={editingTitle}
            onChange={handleChangeEditTitle}
          />
          <button onClick={handleDoneEdit}>Done</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: 8 }}>
          {title}
          <button onClick={handleClickEdit}>Edit</button>
          <button onClick={handleClickDelete}>Delete</button>
        </div>
      )}
    </li>
  )
}
