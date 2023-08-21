import { c as client } from "../../../../chunks/prisma.js";
const load = async () => {
  const getTrucks = async () => {
    const trucks = await client.truck.findMany({
      include: {
        customers: true
      }
    });
    return trucks;
  };
  return {
    trucks: await getTrucks()
  };
};
export {
  load
};
