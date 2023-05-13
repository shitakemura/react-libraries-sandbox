import { setupWorker } from 'msw'
import { getPetsMSW } from '../api/pets/pets.msw'

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...getPetsMSW())
