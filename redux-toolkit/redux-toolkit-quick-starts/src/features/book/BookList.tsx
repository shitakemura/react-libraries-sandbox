import { useAppSelector } from '../../app/hooks'
import { AddBookInput } from './AddBookInput'
import { BookItem } from './BookItem'

export const BookList = () => {
  const bookList = useAppSelector((state) => state.book.bookList)

  return (
    <div>
      <AddBookInput />
      <ul style={{ listStyle: 'none' }}>
        {bookList.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  )
}
