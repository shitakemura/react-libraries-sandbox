import { useForm } from 'react-hook-form'

import { CreateTodoData } from '../..'
import { useCreateTodo } from '../../api/create-todo'

type FormData = {
  title: string
}

export const CreateTodoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()
  const { submit, isLoading } = useCreateTodo({ onSuccess: () => reset() })

  const onSubmit = (formData: FormData) => {
    const data: CreateTodoData = { title: formData.title, state: 'open' }
    submit({ data })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        todo
        <input {...register('title', { required: 'Title is required' })} />
      </label>
      <button disabled={isLoading}>Create</button>
      {errors.title && <p role="alert">{errors.title?.message}</p>}
    </form>
  )
}
