import { useState } from 'react'

export default function useApiRequest(apiFunction) {
  const [error, setError] = useState(null)
  const [contents, setContents] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const excute = async (params, options = {}) => {
    try {
      setError(null)
      setIsLoading(true)

      await new Promise(res => setTimeout(res, 1000))

      const { data = [] } = await apiFunction(params)

      setContents(data)
      options?.onSuccess?.(data)
    } catch (error) {
      setError(error)
      options?.onError?.(error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    error,
    excute,
    contents,
    isLoading,
  }
}
