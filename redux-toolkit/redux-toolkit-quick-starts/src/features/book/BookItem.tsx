import { Book } from './bookSlice'

type Props = {
  book: Book
}

export const BookItem = ({ book }: Props) => {
  return (
    <li style={{ fontSize: '24px' }}>
      {book.title} - {book.author}
    </li>
  )
}
