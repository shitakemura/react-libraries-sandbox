import { useMutation } from '@tanstack/react-query'

import { CreateTodoData, Todo, Todos } from '..'

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
    mutationFn: (todo: CreateTodoData) => createTodo({ data: todo }),
    // onSuccess: async () => {
    //   await queryClient.refetchQueries(['todos'])
    //   onSuccess?.()
    // },
    onMutate: async (todo: CreateTodoData) => {
      await queryClient.cancelQueries({
        queryKey: ['todos'],
      })
      const previousTodos = queryClient.getQueriesData({
        queryKey: ['todos'],
      })
      queryClient.setQueriesData(['todos'], (prevData: Todos | undefined) => {
        return prevData
          ? [{ id: '', ...todo }, ...prevData]
          : [{ id: '', ...todo }]
      })
      return { previousTodos }
    },
    onError: (error, todos, context) => {
      queryClient.setQueriesData(['todos'], context?.previousTodos)
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      })
    },
  })

  return { submit, isLoading }
}
