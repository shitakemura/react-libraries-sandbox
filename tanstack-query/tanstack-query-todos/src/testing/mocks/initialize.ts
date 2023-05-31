import { worker } from './browser'
import { seedDb } from './seed-db'

const initializeMocks = () => {
  if (process.env.NODE_ENV === 'development') {
    worker.start()
    seedDb()
  }
}

initializeMocks()
