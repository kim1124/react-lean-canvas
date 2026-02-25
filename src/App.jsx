import Main from './components/Main'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

export default function App(props) {
  return (
    <>
      <Header />

      <Main>
        <Outlet />
      </Main>
    </>
  )
}
