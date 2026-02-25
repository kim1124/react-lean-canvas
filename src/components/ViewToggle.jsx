import { FaList, FaTh } from 'react-icons/fa'

export default function ViewToggle({ viewMode, setViewMode, getViewStyle }) {
  const onClickSetGrid = () => {
    setViewMode('grid')
  }

  const onClickSetList = () => {
    setViewMode('list')
  }

  return (
    <div className="flex space-x-2">
      <button
        className={getViewStyle(viewMode === 'grid')}
        aria-label="Grid view"
        onClick={onClickSetGrid}
      >
        <FaTh />
      </button>
      <button
        className={getViewStyle(viewMode === 'list')}
        aria-label="List view"
        onClick={onClickSetList}
      >
        <FaList />
      </button>
    </div>
  )
}
