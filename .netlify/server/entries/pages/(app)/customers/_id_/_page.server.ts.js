import { c as client } from "../../../../../chunks/prisma.js";
import { s as superValidate } from "../../../../../chunks/superValidate.js";
import { c as customerPersonalInfoSchema } from "../../../../../chunks/customer.schema.js";
const load = async (event) => {
  const getCustomerWithTrucks = async () => {
    const customer = await client.customer.findUnique({
      where: {
        id: event.params.id
      },
      include: {
        trucks: true
      }
    });
    return customer;
  };
  const form = await superValidate(event, customerPersonalInfoSchema);
  return {
    form,
    customer: await getCustomerWithTrucks()
  };
};
const actions = {
  // updatePersonalInfo: async (event) => {
  // 	const form = await superValidate(event, customerPersonalInfoSchema);
  // 	if (!form.valid) {
  // 		return message(form, 'Customer Data is Invalid, Try Again!');
  // 	}
  // 	try {
  // 		await client.customer.update({
  // 			where: {
  // 				id: event.params.id
  // 			},
  // 			data: {
  // 				...form.data
  // 			}
  // 		});
  // 	} catch (e) {
  // 		if (e instanceof Prisma.PrismaClientKnownRequestError) {
  // 			return message(form, 'Internal Server Error');
  // 		}
  // 	}
  // 	return {
  // 		form
  // 	};
  // }
  // updateTruckInfo: async (event) => {
  // 	const form = await superValidate(event, truckInfoSchema);
  // 	if (!form.valid) {
  // 		return message(form, 'Truck Data is Invalid, Try Again!');
  // 	}
  // 	try {
  // 		await client.truck.update({
  // 			where: {
  // 				id: event.params.id
  // 			},
  // 			data: {
  // 				...form.data
  // 			}
  // 		});
  // 	} catch (e) {
  // 		if (e instanceof Prisma.PrismaClientKnownRequestError) {
  // 			return message(form, 'Internal Server Error');
  // 		}
  // 	}
  // 	return {
  // 		form
  // 	};
  // }
};
export {
  actions,
  load
};
