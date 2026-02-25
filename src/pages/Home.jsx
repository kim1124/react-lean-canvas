import { useState } from 'react'
import { createCanvas, getCanvases, deleteCanvas } from '../api/canvas'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import Error from '../components/Error'
import Button from '../components/Button'
import Loading from '../components/Loading'
import SearchBar from '../components/SearchBar'
import CanvasList from '../components/CanvasList'
import ViewToggle from '../components/ViewToggle'
import CategoryFilter from '../components/CategoryFilter'

function Home() {
  const [filter, setFilter] = useState({
    searchValue: '',
    category: undefined,
  })
  const [viewMode, setViewMode] = useState('grid')

  const handleFilter = (key, value) => {
    setFilter({
      ...filter,
      [key]: value,
    })
  }

  // 0) 커스텀 훅 사용
  const queryClient = useQueryClient()

  // 1) 데이터 조회
  const {
    data = [],
    error,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['canvases', filter.searchValue, filter.category],
    queryFn: () => {
      console.warn('Fatching Data...')

      return getCanvases({
        category: filter.category,
        title_like: filter.searchValue,
      })
    },
    refetchOnWindowFocus: false,
  })

  // 2) 데이터 추가
  const { mutate: createNewCanvas, isLoading: isLoadingCreate } = useMutation({
    mutationFn: createCanvas,
    onError: error => alert(error.message),
    onSuccess: () => queryClient.invalidateQueries(['canvases']),
  })

  // 3) 데이터 삭제
  const { mutate: deleteTargetCanvas } = useMutation({
    mutationFn: deleteCanvas,
    onError: error => alert(error.message),
    onSuccess: () => queryClient.invalidateQueries(['canvases']),
  })

  // API Call 부분
  const getViewStyle = isActive => {
    return `p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200'}`
  }

  const onClickCreateCanvas = () => {
    createNewCanvas()
  }

  const onClickDeleteCanvas = (id, e) => {
    e.preventDefault()

    if (confirm('정말 삭제하시겠습니까?') === false) {
      return
    }

    deleteTargetCanvas(id)
  }

  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex gap-2 flex-col w-full sm:flex-row mb-4 sm:mb-0">
          <SearchBar
            searchValue={filter.searchValue}
            onSearchValue={value => handleFilter('searchValue', value)}
          />
          <CategoryFilter
            category={filter.category}
            onCategoryChange={value => handleFilter('category', value)}
          />
        </div>

        <ViewToggle
          viewMode={viewMode}
          setViewMode={setViewMode}
          getViewStyle={getViewStyle}
        />
      </div>

      <div className="flex justify-end md-6">
        <Button onClick={onClickCreateCanvas} loading={isLoadingCreate}>
          등록하기
        </Button>
      </div>

      {isLoading && <Loading />}
      {error && <Error message={error.message} onRetry={refetch} />}

      {!isLoading && !error && (
        <CanvasList
          viewMode={viewMode}
          searchValue={filter.searchValue}
          onDeleteItem={onClickDeleteCanvas}
          searchContents={data}
        />
      )}
    </>
  )
}

export default Home
