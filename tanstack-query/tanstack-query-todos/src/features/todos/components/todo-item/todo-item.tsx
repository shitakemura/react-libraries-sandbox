import { ChangeEvent, useState } from 'react'

import { useDeleteTodo } from '../../api/delete-todo'
import { useUpdateTodoState } from '../../api/update-todo-state'
import { useUpdateTodoTitle } from '../../api/update-todo-title'
import { State, Todo, UpdateTodoData } from '../../types'

type Props = Todo

export const TodoItem = ({ id, title, state }: Props) => {
  const [editing, setEditing] = useState(false)
  const [editingTitle, setEditingTitle] = useState(title)

  const finishEditing = () => {
    setEditingTitle(title)
    setEditing(false)
  }

  const updateTodoTitle = useUpdateTodoTitle({ onSuccess: finishEditing })
  const updateTodoState = useUpdateTodoState()
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

  const handleChangeTodoState = (event: ChangeEvent<HTMLInputElement>) => {
    const newState: State = event.target.checked ? 'done' : 'open'
    const data: UpdateTodoData = { title, state: newState }
    updateTodoState.submit({ todoId: id, data })
  }

  const isLoading =
    updateTodoTitle.isLoading ||
    updateTodoState.isLoading ||
    deleteTodo.isLoading

  return (
    <li>
      {editing ? (
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            type="text"
            value={editingTitle}
            onChange={handleChangeEditTitle}
          />
          <button onClick={handleDoneEdit} disabled={isLoading}>
            Done
          </button>
          <button onClick={handleCancelEdit} disabled={isLoading}>
            Cancel
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            type="checkbox"
            checked={state === 'done'}
            onChange={handleChangeTodoState}
          />
          {title}
          <button onClick={handleClickEdit} disabled={isLoading}>
            Edit
          </button>
          <button onClick={handleClickDelete} disabled={isLoading}>
            Delete
          </button>
        </div>
      )}
    </li>
  )
}
