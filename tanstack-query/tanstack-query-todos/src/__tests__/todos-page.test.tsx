import userEvent from '@testing-library/user-event'

import { TodosPage } from '../pages/todos'

import { render, screen } from '@/testing/testing-library-utils'

describe('TodosPage', () => {
  test('initial render correctly', async () => {
    render(<TodosPage />)

    // header
    const header = screen.getByRole('heading', { name: 'Todos List' })
    expect(header).toBeInTheDocument()

    // todo input textbox
    const input = screen.getByRole('textbox', { name: 'todo' })
    expect(input).toBeInTheDocument()

    // todo list
    const listItems = await screen.findAllByRole('listitem')
    expect(listItems).toHaveLength(5)
  })

  test('should create a new todo', async () => {
    const user = userEvent.setup()
    render(<TodosPage />)

    const items = await screen.findAllByRole('checkbox')
    expect(items).toHaveLength(5)

    const input = screen.getByRole('textbox', { name: 'todo' })
    await user.clear(input)
    await user.type(input, 'test-todo')

    const createButton = screen.getByRole('button', { name: 'Create' })
    await user.click(createButton)

    const newItem = await screen.findByRole('checkbox', {
      name: 'test-todo',
    })
    expect(newItem).toBeInTheDocument()

    const newItems = screen.getAllByRole('checkbox')
    expect(newItems).toHaveLength(6)
  })
})
