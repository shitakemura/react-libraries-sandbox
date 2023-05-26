import { TodosPage } from '.'

import { render, screen } from '@/testing/testing-library-utils'

test('render correctly', () => {
  render(<TodosPage />)

  const header = screen.getByRole('heading', { name: 'Todos List' })
  expect(header).toBeInTheDocument()
})
