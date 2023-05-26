import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { useDeleteTodo } from '../../api/delete-todo'
import { useUpdateTodoState } from '../../api/update-todo-state'
import { useUpdateTodoTitle } from '../../api/update-todo-title'
import { State, Todo, UpdateTodoData } from '../../types'

type Props = Todo

const todoTitleSchema = z.object({
  title: z.string().min(1, { message: 'Title is required.' }),
})

export type UpdateTitleInput = z.infer<typeof todoTitleSchema>

export const TodoItem = ({ id, title, state }: Props) => {
  const [editing, setEditing] = useState(false)

  const todoTitleForm = useForm<UpdateTitleInput>({
    defaultValues: { title },
    resolver: zodResolver(todoTitleSchema),
    mode: 'onChange',
  })

  const updateTodoTitle = useUpdateTodoTitle({
    onSuccess: () => setEditing(false),
  })
  const updateTodoState = useUpdateTodoState()
  const deleteTodo = useDeleteTodo({ todoId: id })

  const handleClickEdit = () => setEditing(true)
  const handleClickDelete = () => deleteTodo.submit()

  const handleDoneEdit = (input: UpdateTitleInput) => {
    const data: UpdateTodoData = { title: input.title, state }
    updateTodoTitle.submit({ todoId: id, data })
  }
  const handleCancelEdit = () => {
    todoTitleForm.reset({ title })
    setEditing(false)
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
        <form
          style={{ display: 'flex', gap: 8 }}
          onSubmit={todoTitleForm.handleSubmit(handleDoneEdit)}
        >
          <input
            {...todoTitleForm.register('title', {
              required: 'Title is required.',
            })}
          />
          <button type="submit" disabled={isLoading}>
            Done
          </button>
          <button type="button" onClick={handleCancelEdit} disabled={isLoading}>
            Cancel
          </button>
        </form>
      ) : (
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            type="checkbox"
            checked={state === 'done'}
            onChange={handleChangeTodoState}
          />
          {title}
          <button type="button" onClick={handleClickEdit} disabled={isLoading}>
            Edit
          </button>
          <button
            type="button"
            onClick={handleClickDelete}
            disabled={isLoading}
          >
            Delete
          </button>
        </div>
      )}
    </li>
  )
}
