import { useQuery } from '@tanstack/react-query'

import { Todos } from '..'

import { apiClient } from '@/lib/api-client'

const getTodos = async (): Promise<Todos> => {
  const response = await apiClient.get('/todos')
  return response.data as Todos
}

export const useTodos = () => {
  const { data, isFetching } = useQuery<Todos>({
    queryKey: ['todos'],
    queryFn: () => getTodos(),
    initialData: [],
  })

  return {
    data,
    isLoading: isFetching,
  }
}
