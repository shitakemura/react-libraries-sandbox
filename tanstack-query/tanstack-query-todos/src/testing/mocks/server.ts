// The server version is used mostly during running automated tests
// in the Node environment instead of browser.
// The server version is also useful for API calls executed on the server like SSR.
import { setupServer } from 'msw/node'

import { handlers } from './handlers'

export const server = setupServer(...handlers)
