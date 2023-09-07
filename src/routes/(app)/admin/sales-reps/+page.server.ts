import { Prisma } from '@prisma/client';
import type { Actions } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';

import type { PageServerLoad } from './$types';
import { salesRepSchema } from './salesRep.schema';

import { client } from '$lib/server/prisma';

export const load: PageServerLoad = async (event) => {
	const getSalesReps = async () => {
		const salesReps = await client.salesRep.findMany();

		return salesReps;
	};

	const form = await superValidate(event, salesRepSchema);
	return {
		form,
		salesReps: await getSalesReps()
	};
};

export const actions: Actions = {
	create: async (event) => {
		const form = await superValidate(event, salesRepSchema);

		if (!form.valid) {
			return message(form, 'Sales Rep Data is Invalid, Try Again!');
		}

		try {
			await client.salesRep.create({
				data: {
					firstName: form.data.firstName.toString(),
					lastName: form.data.lastName.toString(),
					address: form.data.address.toString(),
					city: form.data.city.toString(),
					state: form.data.state.toString(),
					zip: form.data.zip.toString(),
					country: form.data.country.toString(),
					phone: form.data.phone.toString(),
					email: form.data.email.toString(),
					company: form.data.company.toString(),
					notes: form.data.notes.toString()
				}
			});
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				return message(form, 'Internal Server Error');
			}
		}
		return {
			form
		};
	}
};
