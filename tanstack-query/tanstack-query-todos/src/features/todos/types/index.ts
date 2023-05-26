type State = 'all' | 'open' | 'done'

export type Todo = {
  id: string
  title: string
  state: State
}

export type Todos = ReadonlyArray<Todo>
