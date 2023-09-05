import { c as client } from "../../../../../../chunks/prisma.js";
import { Prisma } from "@prisma/client";
import { s as superValidate, m as message } from "../../../../../../chunks/superValidate.js";
import { t as truckInfoSchema } from "../../../../../../chunks/customer.schema.js";
const load = async (event) => {
  const getCustomerTrucks = async () => {
    const trucks = await client.truck.findMany({
      where: {
        currentCustomerId: event.params.id
      }
    });
    return trucks;
  };
  const form = await superValidate(event, truckInfoSchema);
  return {
    form,
    trucks: await getCustomerTrucks()
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
  updateTruckInfo: async (event) => {
    const form = await superValidate(event, truckInfoSchema);
    if (!form.valid) {
      return message(form, "Truck Data is Invalid, Try Again!");
    }
    try {
      await client.truck.update({
        where: {
          id: form.data.id
        },
        data: {
          ...form.data
        }
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        return message(form, "Internal Server Error");
      }
    }
    return {
      form
    };
  }
};
export {
  actions,
  load
};
