import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { v4 as uuidv4 } from 'uuid'

export type Book = {
  id: string
  title: string
  author?: string
}

type BookState = {
  bookList: Book[]
}

const initialState: BookState = {
  bookList: [
    {
      id: uuidv4(),
      title: '1984',
      author: 'George Orwell',
    },
    {
      id: uuidv4(),
      title: "Harry Potter and the Philosopher's Stone",
      author: 'J. K. Rowling',
    },
    {
      id: uuidv4(),
      title: 'The Lord of the Rings',
      author: 'J.R.R Tolkien',
    },
  ],
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addNewBook: (state, action: PayloadAction<Book>) => {
      state.bookList.push(action.payload)
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      const {
        payload: { id, title, author },
      } = action

      state.bookList = state.bookList.map((book) => {
        return book.id === id ? { ...book, title, author } : book
      })
    },
    deleteBook: (state, action: PayloadAction<{ id: string }>) => {
      state.bookList = state.bookList.filter(
        (book) => book.id !== action.payload.id
      )
    },
  },
})

export const { addNewBook, updateBook, deleteBook } = bookSlice.actions

export const selectBookList = (state: RootState) => state.book.bookList
export default bookSlice.reducer
