import axios from 'axios'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import Button from '../components/Button'

export default function About() {
  const {
    isLoading,
    error,
    data = [],
  } = useQuery({
    queryKey: ['canvases'],
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:8000/canvases/')

      return data
    },
  })

  const { mutate: createNewCanvas, isLoading: isLoadingCreate } = useMutation({
    mutationFn: options =>
      axios.post('http://localhost:8000/canvases/', options),
    onSuccess: () => {
      queryClient.invalidateQueries(['canvases'])
    },
  })

  const queryClient = useQueryClient()

  const handleCrate = () => {
    createNewCanvas({
      title: 'New Canvas',
    })
  }

  return (
    <>
      <h2 className="text-3xl">useQuery</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-700">Error: {error.message}</p>}
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}

      <h2 className="text-3xl">useMutation</h2>
      {isLoadingCreate && <p>Creating...</p>}
      <Button onClick={handleCrate}>캔버스 등록</Button>
    </>
  )
}
