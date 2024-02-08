import { ChangeEvent, useState } from 'react'
import logo from './assets/logo.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

interface Note {
  id: string
  createdDate: Date
  content: string
}

const NOTES_STORAGE_KEY = 'Web-Notes:Notes-State-1.0.0'

export function App() {
  const [search, setSearch] = useState('')

  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem(NOTES_STORAGE_KEY)
    if (notesOnStorage) {
      return JSON.parse(notesOnStorage)
    }

    return []
  })

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      createdDate: new Date(),
      content,
    }
    const NotesArray = [newNote, ...notes]
    setNotes(NotesArray)

    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(NotesArray))
  }

  function onNoteDelete(id: string) {
    const newNotes = notes.filter((note) => note.id !== id)

    setNotes(newNotes)
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(newNotes))
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const query = e.target.value

    setSearch(query)
  }

  const filteredNotes =
    search !== ''
      ? notes.filter((note) =>
          note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
        )
      : notes

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      <img src={logo} alt="logo NLW Expert" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em usas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500"
          onChange={handleSearch}
        />
      </form>

      <div className="border-slate-700 border" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={onNoteCreated} />
        {filteredNotes.map((note) => {
          return (
            <NoteCard key={note.id} note={note} onNoteDelete={onNoteDelete} />
          )
        })}
      </div>
    </div>
  )
}
