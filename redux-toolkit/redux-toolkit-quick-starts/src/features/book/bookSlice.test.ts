import { store } from '../../app/store'
import { addNewBook } from './bookSlice'

test('Adds a new book', () => {
  const state = store.getState().book
  const initialBookCount = state.bookList.length

  store.dispatch(addNewBook({ id: '4', title: 'Test book', author: 'Tester' }))

  const updatedState = store.getState().book
  const addedBook = updatedState.bookList.find((book) => book.id === '4')

  expect(addedBook?.title).toBe('Test book')
  expect(addedBook?.author).toBe('Tester')

  expect(updatedState.bookList.length).toBeGreaterThan(initialBookCount)
})
