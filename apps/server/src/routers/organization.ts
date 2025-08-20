import { prisma } from '@/lib/db'
import { protectedProcedure } from '@/lib/orpc'

const getUsers = protectedProcedure.handler(async ({ context }) => {
  const userId = context.session.user.id

  return await prisma.organizationMember.findMany({
    where: {
      userId,
    },
    include: {
      organization: true,
    },
  })
})

export default {
  getUsers,
}
