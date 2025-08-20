import { prisma } from "@/lib/db";
import { protectedProcedure } from "@/lib/orpc";

export const organizationRouter = {
  getUsers: protectedProcedure.handler(async ({ context }) => {
    const userId = context.session.user.id;

    return await prisma.organizationMember.findMany({
      where: {
        userId,
      },
      include: {
        organization: true,
      },
    });
  }),
};
