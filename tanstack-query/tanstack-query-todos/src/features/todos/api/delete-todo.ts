import { useMutation } from '@tanstack/react-query'

import { apiClient } from '@/lib/api-client'
import { queryClient } from '@/lib/react-query'

type DeleteTodoOption = {
  todoId: string
}

export const deleteTodo = ({ todoId }: DeleteTodoOption) => {
  return apiClient.delete(`/todos/${todoId}`)
}

export const useDeleteTodo = ({ todoId }: DeleteTodoOption) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: () => deleteTodo({ todoId }),
    onSuccess: () => {
      queryClient.refetchQueries(['todos'])
    },
  })

  return { submit, isLoading }
}
