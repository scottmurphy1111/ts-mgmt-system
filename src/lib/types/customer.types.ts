import type { Prisma } from '@prisma/client';

export type CustomerWithTrucks = Prisma.CustomerGetPayload<{
	include: { trucks: true };
}>;
