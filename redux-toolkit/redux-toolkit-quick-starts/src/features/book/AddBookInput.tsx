import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch } from '../../app/hooks'
import { addNewBook } from './bookSlice'
import { useState } from 'react'

export const AddBookInput = () => {
  const dispatch = useAppDispatch()

  const [form, setForm] = useState({ title: '', author: '' })
  const clearForm = () => setForm({ title: '', author: '' })

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(
      addNewBook({ id: uuidv4(), title: form.title, author: form.author })
    )
    clearForm()
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="title">title</label>
      <input
        id="title"
        type="text"
        name="title"
        value={form.title}
        required
        onChange={handleOnChange}
      />

      <label htmlFor="author">author</label>
      <input
        id="author"
        type="text"
        name="author"
        value={form.author}
        onChange={handleOnChange}
      />

      <button>Add</button>
    </form>
  )
}
