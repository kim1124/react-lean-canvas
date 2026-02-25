import CanvasItem from './CanvasItem'

export default function CanvasList({
  viewMode,
  searchValue,
  onDeleteItem,
  searchContents,
}) {
  if (searchContents.length === 0) {
    return (
      <>
        {/* 컨텐츠가 없는 경우에 출력 */}
        {searchContents.length === 0 && (
          <>
            <div className="text-center py-10">
              <p className="text-xl text-gray-600">
                {searchValue ? '검색 결과가 없습니다.' : '목록이 비어있습니다.'}
              </p>
            </div>
          </>
        )}
      </>
    )
  }

  return (
    <>
      <div
        className={`grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-${viewMode === 'grid' ? 3 : 1}`}
      >
        {searchContents.map(item => (
          <CanvasItem
            key={item.id}
            {...item}
            onDelete={e => onDeleteItem(item.id, e)}
          />
        ))}
      </div>
    </>
  )
}
