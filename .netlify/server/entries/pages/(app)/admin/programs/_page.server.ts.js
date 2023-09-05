import { c as client } from "../../../../../chunks/prisma.js";
import { s as superValidate, m as message } from "../../../../../chunks/superValidate.js";
import { Prisma } from "@prisma/client";
import { z } from "zod";
const programSchema = z.object({
  name: z.string({ required_error: "Name is required" }).min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }).trim(),
  description: z.string({ required_error: "Description is required" }).min(1, { message: "Description is required" }).max(100, { message: "Description must be less than 100 characters" }).trim()
});
const load = async (event) => {
  const getPrograms = async () => {
    const programs = await client.program.findMany();
    return programs;
  };
  const form = await superValidate(event, programSchema);
  return {
    form,
    programs: await getPrograms()
  };
};
const actions = {
  create: async (event) => {
    const form = await superValidate(event, programSchema);
    console.log("🥵", form);
    if (!form.valid) {
      return message(form, "Program Data is Invalid, Try Again!");
    }
    try {
      await client.program.create({
        data: {
          name: form.data.name.toString(),
          description: form.data.description.toString()
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
