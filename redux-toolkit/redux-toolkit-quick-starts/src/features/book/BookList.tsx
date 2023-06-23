import { useAppSelector } from '../../app/hooks'
import { BookItem } from './BookItem'

export const BookList = () => {
  const bookList = useAppSelector((state) => state.book.bookList)

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {bookList.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  )
}
