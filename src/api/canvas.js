import dayjs from 'dayjs'
import { canvases } from './http'
import { v4 as uuidv4 } from 'uuid'

export async function getCanvases(params) {
  const payload = Object.assign(
    {
      _sort: 'date',
      _order: 'desc',
    },
    params,
  )

  const { data } = await canvases.get('/', { params: payload })

  return data
}

export async function getCanvasById(id) {
  const { data } = await canvases.get(`/${id}`)

  return data
}

export function createCanvas() {
  const newCanvas = {
    title: `새로운 캔버스 ${uuidv4()}`,
    category: '신규',
    date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  }

  return canvases.post('/', newCanvas)
}

export async function updateTitle(id, title) {
  await canvases.patch(`/${id}`, { title })
}

export async function updateCanvas(id, canvas) {
  await canvases.put(`/${id}`, canvas)
}

export async function deleteCanvas(id) {
  await canvases.delete(`/${id}`)
}
