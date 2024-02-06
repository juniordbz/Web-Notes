import logo from './assets/logo.svg'
import { NoteCard } from './components/note-card'

const note = {
  createdDate: new Date(),
  content: 'Hello world',
}

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="logo NLW Expert" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em usas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500"
        />
      </form>

      <div className="border-slate-700 border" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <div className="rounded-md bg-slate-700 p-5 space-y-3">
          <span className="font-medium text-slate-200 text-sm">
            Adicionar nota
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Grave uma nota em áudio que será convertida para texto
            automaticamente.
          </p>
        </div>

        <NoteCard note={note} />
      </div>
    </div>
  )
}
