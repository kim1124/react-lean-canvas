import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar({ searchValue = '', onSearchValue }) {
  const [localSearchValue, setLocalSearchValue] = useState(searchValue)

  return (
    <div className="relative w-full sm:w-64 mb-4 sm:mb-0">
      <input
        type="text"
        value={localSearchValue}
        placeholder="검색"
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="검색"
        onChange={e => setLocalSearchValue(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            onSearchValue(localSearchValue)
          }
        }}
      />
      <FaSearch className="absolute left-3 top-3 text-gray-400" />
    </div>
  )
}
