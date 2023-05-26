import { ChangeEvent, FormEvent, useState } from 'react'

import { CreateTodoData } from '../..'
import { useCreateTodo } from '../../api/create-todo'

export const CreateTodoForm = () => {
  const [title, setTitle] = useState('')
  const { submit, isLoading } = useCreateTodo({ onSuccess: () => setTitle('') })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data: CreateTodoData = { title, state: 'all' }
    submit({ data })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        todo
        <input name="title" type="text" value={title} onChange={handleChange} />
      </label>
      <button disabled={isLoading}>Create</button>
    </form>
  )
}
