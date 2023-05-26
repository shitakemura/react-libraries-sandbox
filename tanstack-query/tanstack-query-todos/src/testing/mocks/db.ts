import { factory, primaryKey } from '@mswjs/data'

import { uid } from '@/utils/uid'

const models = {
  todo: {
    id: primaryKey(uid),
    title: String,
    state: String,
  },
}

export const db = factory(models)
