import TailwindButton from './components/TailwindCss/TailwindButton'

export default function AppTailwindCss() {
  function onClick() {
    alert('Click!!')
  }

  return (
    <>
      <h1 className="text-3xl text-sky-300 font-bold underline">Hello World</h1>
      <TailwindButton onClick={onClick}>Tailwind Button</TailwindButton>
    </>
  )
}
