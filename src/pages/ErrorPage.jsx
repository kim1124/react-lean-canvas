import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <>
      <div id="error-page">
        <h1>Error Page</h1>
        <p>😥 해당 페이지는 없거나 에러가 발생하여 사용할 수 없습니다.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  )
}
