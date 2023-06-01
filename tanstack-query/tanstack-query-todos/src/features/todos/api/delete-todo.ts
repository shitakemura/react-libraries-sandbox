import { useMutation } from '@tanstack/react-query'

import { Todo } from '..'

import { apiClient } from '@/lib/api-client'
import { queryClient } from '@/lib/react-query'

type DeleteTodoOption = {
  todoId: string
}

export const deleteTodo = async ({ todoId }: DeleteTodoOption) => {
  const response = await apiClient.delete(`/todos/${todoId}`)
  return response.data as Todo
}

export const useDeleteTodo = ({ todoId }: DeleteTodoOption) => {
  const { mutate: submit, isLoading } = useMutation<Todo>({
    mutationFn: () => deleteTodo({ todoId }),
    onSuccess: async () => {
      await queryClient.refetchQueries(['todos'])
    },
  })

  return { submit, isLoading }
}
