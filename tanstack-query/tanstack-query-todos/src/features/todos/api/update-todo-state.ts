import { useMutation } from '@tanstack/react-query'

import { UpdateTodoData } from '..'

import { apiClient } from '@/lib/api-client'
import { queryClient } from '@/lib/react-query'

type UpdateTodoStateOptions = {
  todoId: string
  data: UpdateTodoData
}

export const updateTodoState = ({ todoId, data }: UpdateTodoStateOptions) => {
  return apiClient.put(`/todos/${todoId}`, data)
}

export const useUpdateTodoState = () => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: updateTodoState,
    onSuccess: async () => {
      await queryClient.refetchQueries(['todos'])
    },
  })

  return { submit, isLoading }
}
