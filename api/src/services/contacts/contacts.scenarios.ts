import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ContactCreateArgs>({
  contact: {
    one: {
      data: { name: 'String', email: 'String', message: 'String', done: true },
    },
    two: {
      data: { name: 'String', email: 'String', message: 'String', done: true },
    },
  },
})

export type StandardScenario = typeof standard
