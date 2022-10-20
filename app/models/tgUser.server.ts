import type { TgUser } from '@prisma/client';
import { prisma } from '~/db.server';

export type { TgUser } from '@prisma/client';

export async function upsertTgUser(req: {
  id: TgUser['id'];
  firstName: TgUser['firstName'];
  username: TgUser['username'];
}) {
  const { id } = req;

  return prisma.tgUser.upsert({
    where: { id },
    create: {
      ...req,
    },
    update: {
      ...req,
    },
  });
}
