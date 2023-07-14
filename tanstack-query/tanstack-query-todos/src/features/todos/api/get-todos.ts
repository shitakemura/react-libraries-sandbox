import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { Todos } from '..'

import { apiClient } from '@/lib/api-client'

const getTodos = async (): Promise<Todos> => {
  const response = await apiClient.get<Todos>('/todos')
  return response.data
}

export const TodosQueryKey = ['todos'] as const

export const useTodos = <TData = Todos>(
  options?: Omit<
    UseQueryOptions<Todos, AxiosError, TData, typeof TodosQueryKey>,
    'queryKey' | 'queryFn'
  >
) => {
  const { data, isFetching } = useQuery({
    queryKey: TodosQueryKey,
    queryFn: getTodos,
    ...options,
  })

  return {
    data,
    isLoading: isFetching,
  }
}
