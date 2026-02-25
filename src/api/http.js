import axios from 'axios'

function create(baseURL, options = {}) {
  const instance = axios.create({
    baseURL,
    ...options,
  })

  return instance
}

// export const canvases = create(
//   'https://react-vercel-five-teal.vercel.app/canvases',
// )
export const canvases = create(`${import.meta.env.VITE_API_BASE_URL}/canvases`)
