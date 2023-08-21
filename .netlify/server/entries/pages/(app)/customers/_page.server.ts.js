import { c as client } from "../../../../chunks/prisma.js";
const load = async () => {
  const getCustomers = async () => {
    const customers = await client.customer.findMany({
      include: {
        trucks: true
      }
    });
    return customers;
  };
  return {
    customers: await getCustomers()
  };
};
const actions = {
  create: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    if (!data.firstName)
      throw new Error("No data was sent");
    const customer = await client.customer.create({
      data: {
        firstName: data.firstName.toString(),
        lastName: data.lastName.toString(),
        address: data.address.toString(),
        city: data.city.toString(),
        state: data.state.toString(),
        zip: data.zip.toString(),
        email: data.email.toString(),
        phone: data.phone.toString()
      }
    });
    return {
      data: customer
    };
  }
};
export {
  actions,
  load
};
