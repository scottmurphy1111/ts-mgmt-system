import { Prisma } from "@prisma/client";
import { s as superValidate, m as message } from "../../../../chunks/superValidate.js";
import { c as customerPersonalInfoSchema } from "../../../../chunks/customer.schema.js";
import { c as client } from "../../../../chunks/prisma.js";
const load = async (event) => {
  const getCustomers = async () => {
    const customers = await client.customer.findMany({
      include: {
        trucks: true
      }
    });
    return customers;
  };
  const form = await superValidate(event, customerPersonalInfoSchema);
  return {
    form,
    customers: await getCustomers()
  };
};
const actions = {
  create: async (event) => {
    const form = await superValidate(event, customerPersonalInfoSchema);
    if (!form.valid) {
      return message(form, "Customer Data is Invalid, Try Again!");
    }
    try {
      await client.customer.create({
        data: {
          firstName: form.data.firstName.toString(),
          lastName: form.data.lastName.toString(),
          address: form.data.address.toString(),
          city: form.data.city.toString(),
          state: form.data.state.toString(),
          zip: form.data.zip.toString(),
          email: form.data.email.toString(),
          phone: form.data.phone?.toString()
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
