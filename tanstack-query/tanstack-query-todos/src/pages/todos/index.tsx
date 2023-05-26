import { CreateTodoForm, TodosList } from '@/features/todos'

export const TodosPage = () => {
  return (
    <>
      <h1>Todos List</h1>
      <CreateTodoForm />
      <TodosList />
    </>
  )
}
