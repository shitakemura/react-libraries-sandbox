import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import bookReducer from '../features/book/bookSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    book: bookReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
