import { c as client } from "../../../../../chunks/prisma.js";
const load = async ({ params }) => {
  const getTrucksWithCustomers = async () => {
    return await client.truck.findUnique({
      where: {
        id: params.id
      },
      include: {
        customers: true
      }
    });
  };
  return {
    truckData: await getTrucksWithCustomers()
  };
};
const actions = {
  update: async ({ params, request }) => {
    const data = Object.fromEntries(await request.formData());
    const result = await client.truck.update({
      where: {
        id: params.id
      },
      data
    });
    return {
      data: result
    };
  }
};
export {
  actions,
  load
};
