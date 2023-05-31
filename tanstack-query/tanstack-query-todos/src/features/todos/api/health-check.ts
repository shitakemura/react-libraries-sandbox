import { useQuery } from '@tanstack/react-query'

import { apiClient } from '@/lib/api-client'

const getHealthCheck = (): Promise<{ healthy: boolean }> => {
  return apiClient.get('http://localhost:3030/healthcheck')
}

export const useHealthCheck = () => {
  const { data } = useQuery({
    queryKey: ['healthcheck'],
    queryFn: () => getHealthCheck(),
  })

  return { data }
}
