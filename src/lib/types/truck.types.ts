import type { Prisma } from '@prisma/client';

export type TruckWithCustomers = Prisma.TruckGetPayload<{
	include: { customers: true };
}>;
