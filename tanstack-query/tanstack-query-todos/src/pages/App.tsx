import { TodosPage } from './todos'

import { AppProvider } from '@/providers/app'

function App() {
  return (
    <AppProvider>
      <TodosPage />
    </AppProvider>
  )
}

export default App
