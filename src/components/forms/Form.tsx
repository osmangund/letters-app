import HandlePreview from "../MarkdownPreview"

type InputProps = {
  name: string
  value: string
  onChange: (e: any) => void
  placeHolder?: string
}

export function Form({ children, onSubmit }: any) {
  return (
    <form className="mt-16 md:mt-20 flex flex-col gap-3" onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export function Input({ name, value, onChange }: InputProps) {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
  return (
    <>
      <label htmlFor={name}>{capitalizedName}</label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={`${name}...`}
        value={value}
        onChange={onChange}
        className="border border-slate-500 px-4 py-2"
        required
      />
    </>
  )
}

export function LetterTextArea({ name, value, onChange }: InputProps) {
  return (
    <>
      <label htmlFor={name}>Letter</label>
      <div className="flex *:flex-1 gap-4 max-[768px]:flex-col">
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="border border-slate-500 px-4 py-2 min-h-48 text-start justify-start"
          required
        />
        <HandlePreview letter={value} />
      </div>
    </>
  )
}
