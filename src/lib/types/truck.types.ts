import type { Prisma } from '@prisma/client';

export type TruckWithCustomers = Prisma.TruckGetPayload<{
	include: { customers: true };
}>;

export type TrucksWithProgramsEnrolled = Prisma.TruckGetPayload<{
	include: {
		programsEnrolled: {
			include: {
				program: true;
			};
		};
	};
}>;

export type TruckProgramsEnrolledWithProgram = Prisma.TruckProgramsEnrolledGetPayload<{
	include: {
		program: true;
	};
}>;
