import { Prisma } from '@prisma/client';
import type { Actions } from '@sveltejs/kit';
import { superValidate, message } from 'sveltekit-superforms/server';

import { salesRepSchema } from '../salesRep.schema';

import type { PageServerLoad } from './$types';

import { client } from '$lib/server/prisma';

export const load: PageServerLoad = async (event) => {
	const getSalesRep = async () => {
		const salesRep = await client.salesRep.findUnique({
			where: {
				id: event.params.id
			}
		});

		return salesRep;
	};

	const form = await superValidate(event, salesRepSchema);
	return {
		form,
		salesRep: await getSalesRep()
	};
};

export const actions: Actions = {
	updateSalesRep: async (event) => {
		const form = await superValidate(event, salesRepSchema);

		if (!form.valid) {
			return message(form, 'SalesRep Data is Invalid, Try Again!');
		}

		try {
			await client.salesRep.update({
				where: {
					id: event.params.id
				},
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
