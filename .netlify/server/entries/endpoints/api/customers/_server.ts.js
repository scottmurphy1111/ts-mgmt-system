import { c as client } from "../../../../chunks/prisma.js";
import { j as json } from "../../../../chunks/index.js";
const GET = async (req) => {
  const searchTerm = req.url.searchParams.get("search");
  const searchedCustomers = await client.customer.findMany({
    where: {
      OR: [
        {
          companyName: {
            contains: searchTerm?.toString()
          }
        },
        {
          lastName: {
            contains: searchTerm?.toString()
          }
        }
      ]
      // companyName: {
      // 	contains: searchTerm?.toString()
      // }
    },
    include: {
      trucks: true
    }
  });
  return json(searchedCustomers);
};
const DELETE = async ({ url }) => {
  const paramIds = url.searchParams.get("ids");
  const ids = paramIds?.split(",").map((id) => id);
  const deletedCustomers = await client.customer.deleteMany({
    where: {
      id: {
        in: ids
      }
    }
  });
  return json(deletedCustomers);
};
export {
  DELETE,
  GET
};
