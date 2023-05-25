type State = 'all' | 'open' | 'done'

export type Todo = {
  id: number
  title: string
  state: State
}

export type Todos = ReadonlyArray<Todo>
