import { type RouterClient } from '@orpc/server'
import { publicProcedure } from '../lib/orpc'

import { lazy } from '@orpc/server'

export const appRouter = {
  healthCheck: publicProcedure.handler(() => {
    return 'OK'
  }),
  organization: lazy(() => import('./organization')),
}
export type AppRouter = typeof appRouter
export type AppRouterClient = RouterClient<typeof appRouter>
