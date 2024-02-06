import logo from './assets/logo.svg'
import { NewNoteCard } from './components/new-note-card'
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
        <NewNoteCard />
        <NoteCard note={note} />
      </div>
    </div>
  )
}
