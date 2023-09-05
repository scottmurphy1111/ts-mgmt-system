import { PrismaClient } from "@prisma/client";
import { p as private_env } from "./shared-server.js";
const client = global.prisma || new PrismaClient();
if (private_env.NODE_ENV === "development")
  global.prisma = client;
export {
  client as c
};
