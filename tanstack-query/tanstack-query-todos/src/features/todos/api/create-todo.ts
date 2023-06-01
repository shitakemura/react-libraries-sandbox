import { useMutation } from '@tanstack/react-query'

import { CreateTodoData, Todo } from '..'

import { apiClient } from '@/lib/api-client'
import { queryClient } from '@/lib/react-query'

type CreateTodoOptions = {
  data: CreateTodoData
}

export const createTodo = async ({
  data,
}: CreateTodoOptions): Promise<Todo> => {
  const response = await apiClient.post('/todos', data)
  return response.data as Todo
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
