import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import LeanCanvas from '../components/LeanCanvas'
import CanvasTitle from '../components/CanvasTitle'
import { updateTitle, updateCanvas, getCanvasById } from '../api/canvas'

export default function CanvasDetail() {
  const { id } = useParams()
  const [canvasData, setCanvasData] = useState()

  async function fetchCanvas(id) {
    try {
      const data = await getCanvasById(id)

      setCanvasData(data)
    } catch (error) {
      alert(error.message)
    }
  }

  async function onChangeTitle(title) {
    try {
      await updateTitle(id, title)
      await fetchCanvas(id)
    } catch (error) {
      alert(error.message)
    }
  }

  const handleCanvasChange = async updatedCanvas => {
    try {
      await updateCanvas(id, updatedCanvas)
      setCanvasData(updatedCanvas)
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    fetchCanvas(id)
  }, [id])

  return (
    <>
      <CanvasTitle title={canvasData?.title || ''} onChange={onChangeTitle} />
      {canvasData && (
        <LeanCanvas canvas={canvasData} onCanvasChange={handleCanvasChange} />
      )}
    </>
  )
}
