export default function CategoryFilter({ category, onCategoryChange }) {
  const categories = ['신규', '헬스케어', '물류', '여행']

  return (
    <select
      className="border p-2 w-full sm:w-32 rounded-lg"
      value={category || 'all'}
      onChange={e =>
        onCategoryChange(e.target.value === 'all' ? undefined : e.target.value)
      }
    >
      <option value="all">전체</option>
      {categories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  )
}
