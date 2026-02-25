export default function TailwindButton(props) {
  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-200"
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  )
}
