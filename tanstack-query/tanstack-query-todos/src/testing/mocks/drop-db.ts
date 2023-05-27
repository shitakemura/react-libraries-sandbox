import { drop } from '@mswjs/data'

import { db } from './db'

export const dropDb = () => drop(db)
