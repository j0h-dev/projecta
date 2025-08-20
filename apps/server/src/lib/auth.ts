import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { prisma } from './db'

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  trustedOrigins: [process.env.CORS_ORIGIN || ''],
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      isAppAdmin: {
        type: 'boolean',
        default: false,
        description: 'Is this user an app admin?',
      },
    },
  },
})
