import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TodoCreateArgs>({
  todo: {
    one: { data: { title: 'String', body: 'String', done: true } },
    two: { data: { title: 'String', body: 'String', done: true } },
  },
})

export type StandardScenario = typeof standard
