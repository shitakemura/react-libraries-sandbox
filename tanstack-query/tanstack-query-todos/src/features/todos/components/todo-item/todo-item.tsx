import { Todo } from '../../types'

type Props = Todo

export const TodoItem = ({ title }: Props) => {
  return <li>{title}</li>
}
