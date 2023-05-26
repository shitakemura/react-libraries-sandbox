import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { CreateTodoData } from '../..'
import { useCreateTodo } from '../../api/create-todo'

const schema = z.object({
  title: z.string().min(1, { message: 'Title is required.' }),
})

export type FormInput = z.infer<typeof schema>

export const CreateTodoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  })

  const { submit, isLoading } = useCreateTodo({ onSuccess: () => reset() })

  const onSubmit = (input: FormInput) => {
    const data: CreateTodoData = { title: input.title, state: 'open' }
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
