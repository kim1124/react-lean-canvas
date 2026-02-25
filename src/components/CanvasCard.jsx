import { v4 as uuidV4 } from 'uuid'
import { FaPlus } from 'react-icons/fa'
import { useMemo, useReducer } from 'react'

import Note from './Note'

export default function CanvasCard({
  title,
  notes = [],
  isSubtitle = false,
  onNotesChange,
}) {
  const subTitleStyle = useMemo(() => {
    return !isSubtitle ? 'bg-gray-100 border-b border-b-gray-300' : ''
  }, [isSubtitle])

  const onClickAddNote = () => {
    console.warn('Add Note clicked')

    onNotesChange([
      ...notes,
      {
        id: uuidV4(),
        content: '',
        color: '',
      },
    ])
  }

  const onClickRemoveNote = id => {
    const updatedNotes = notes.filter(note => note.id !== id)
    onNotesChange(updatedNotes)
  }

  const handleUpdateNote = (id, content, color) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, content, color } : note,
    )

    onNotesChange(updatedNotes)
  }

  return (
    <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
      <div
        className={`flex items-start justify-between px-3 py-2 ${subTitleStyle}`}
      >
        <h3 className={isSubtitle ? 'font-bold' : ''}>{title}</h3>
        <button
          className="bg-blue-400  text-white p-1.5 text-xs rounded-md"
          onClick={e => {
            e.stopPropagation()
            onClickAddNote()
          }}
        >
          <FaPlus />
        </button>
      </div>
      <div className="space-y-3 min-h-32 p-3">
        {notes.map(note => (
          <Note
            key={note.id}
            id={note.id}
            content={note.content}
            color={note.color}
            onRemoveNote={onClickRemoveNote}
            onUpdateNote={handleUpdateNote}
          />
        ))}
      </div>
    </div>
  )
}
