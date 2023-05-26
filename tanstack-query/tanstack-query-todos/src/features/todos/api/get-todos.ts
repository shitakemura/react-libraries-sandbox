import { useQuery } from '@tanstack/react-query'

import { Todos } from '..'

import { apiClient } from '@/lib/api-client'

const getTodos = (): Promise<Todos> => {
  return apiClient('/todos')
}

export const useTodos = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodos(),
    initialData: [],
  })

  return {
    data,
    isLoading: isFetching,
  }
}
