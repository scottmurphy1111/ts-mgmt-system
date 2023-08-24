import { client } from '$lib/server/prisma';
import { Prisma } from '@prisma/client';
import type { Actions } from '@sveltejs/kit';
import { superValidate, message } from 'sveltekit-superforms/server';
import { customerPersonalInfoSchema } from '../customer.schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const getCustomer = async () => {
		const customer = await client.customer.findUnique({
			where: {
				id: event.params.id
			}
		});

		return customer;
	};

	const form = await superValidate(event, customerPersonalInfoSchema);

	return {
		form,
		customer: await getCustomer()
	};
};

export const actions: Actions = {
	updatePersonalInfo: async (event) => {
		const form = await superValidate(event, customerPersonalInfoSchema);

		if (!form.valid) {
			return message(form, 'Customer Data is Invalid, Try Again!');
		}

		try {
			await client.customer.update({
				where: {
					id: event.params.id
				},
				data: {
					...form.data
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
