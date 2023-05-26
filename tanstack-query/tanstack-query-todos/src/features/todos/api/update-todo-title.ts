import { useMutation } from '@tanstack/react-query'

import { UpdateTodoData } from '..'

import { apiClient } from '@/lib/api-client'
import { queryClient } from '@/lib/react-query'

type UpdateTodoTitleOptions = {
  todoId: string
  data: UpdateTodoData
}

export const updateTodoTitle = ({ todoId, data }: UpdateTodoTitleOptions) => {
  return apiClient.put(`/todos/${todoId}`, data)
}

type UseUpdateTodoTitleOptions = {
  onSuccess?: () => void
}

export const useUpdateTodoTitle = ({
  onSuccess,
}: UseUpdateTodoTitleOptions) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: updateTodoTitle,
    onSuccess: () => {
      queryClient.refetchQueries(['todos'])
      onSuccess?.()
    },
  })

  return { submit, isLoading }
}
