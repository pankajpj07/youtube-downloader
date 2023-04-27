type ButtonProps = {
  title: string
  onClickFn: Function
}

export default function Button({ title, onClickFn }: ButtonProps) {
  return (
    <button
      className="p-3 m-1.5 flex w-56 justify-center bg-blue-900 text-white hover:bg-blue-600"
      onClick={() => onClickFn()}
    >
      {title}
    </button>
  )
}
