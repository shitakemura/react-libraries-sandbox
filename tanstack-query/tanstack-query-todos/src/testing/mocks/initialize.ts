import { seedDb } from './seed-db'

const initializeMocks = async () => {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./browser')
    worker.start()
    seedDb()
  }
}

initializeMocks()
