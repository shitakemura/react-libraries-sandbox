import { useMutation } from '@tanstack/react-query'

import { CreateTodoData } from '..'

import { apiClient } from '@/lib/api-client'
import { queryClient } from '@/lib/react-query'

type CreateTodoOptions = {
  data: CreateTodoData
}

export const createTodo = ({ data }: CreateTodoOptions) => {
  return apiClient.post('/todos', data)
}

type UseCreateTodoOptions = {
  onSuccess?: () => void
}

export const useCreateTodo = ({ onSuccess }: UseCreateTodoOptions) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: createTodo,
    onSuccess: async () => {
      await queryClient.refetchQueries(['todos'])
      onSuccess?.()
    },
  })

  return { submit, isLoading }
}
