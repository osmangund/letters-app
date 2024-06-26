type ButtonProps = {
  onClick?: () => void
  children?: React.ReactNode
  className?: string
}

export default function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button
      className={`bg-black text-white hover:text-gray-50 hover:border-gray-200 transition-all px-3 rounded w-fit border border-gray-700 py-2 font-bold ${
        className ? className : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
