import { useMutation } from '@tanstack/react-query'

import { Todo, UpdateTodoData } from '..'

import { apiClient } from '@/lib/api-client'
import { queryClient } from '@/lib/react-query'

type UpdateTodoTitleOptions = {
  todoId: string
  data: UpdateTodoData
}

export const updateTodoTitle = async ({
  todoId,
  data,
}: UpdateTodoTitleOptions): Promise<Todo> => {
  const response = await apiClient.put(`/todos/${todoId}`, data)
  return response.data as Todo
}

type UseUpdateTodoTitleOptions = {
  onSuccess?: () => void
}

export const useUpdateTodoTitle = ({
  onSuccess,
}: UseUpdateTodoTitleOptions) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: updateTodoTitle,
    onSuccess: async () => {
      await queryClient.refetchQueries(['todos'])
      onSuccess?.()
    },
  })

  return { submit, isLoading }
}
