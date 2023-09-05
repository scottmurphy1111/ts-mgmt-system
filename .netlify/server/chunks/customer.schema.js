import { z } from "zod";
const customerPersonalInfoSchema = z.object({
  firstName: z.string().trim(),
  lastName: z.string().trim(),
  companyName: z.string().trim(),
  address: z.string({ required_error: "Address is required" }).min(1, { message: "Address is required" }).max(100, { message: "Address must be less than 100 characters" }).trim(),
  city: z.string({ required_error: "City is required" }).min(1, { message: "City is required" }).max(100, { message: "City must be less than 100 characters" }).trim(),
  state: z.string({ required_error: "State is required" }),
  zip: z.string({ required_error: "Zip is required" }),
  email: z.string({ required_error: "Email is required" }).min(1, { message: "Email is required" }).max(100, { message: "Email must be less than 100 characters" }).email({ message: "Email must be a valid email address" }),
  phone: z.string({ required_error: "Phone is required" }).min(10, { message: "Phone must be at least 10 characters" }).max(14, { message: "Phone must be less than 14 characters" }).regex(/[0-9]{3}-[0-9]{3}-[0-9]{4}/, { message: "Phone must match pattern XXX-XXX-XXXX" })
});
const truckInfoSchema = z.object({
  id: z.string({ required_error: "Id is required" }),
  year: z.string({ required_error: "Year is required" }).min(4, { message: "Year must be at least 4 characters" }).max(4, { message: "Year must be less than 4 characters" }).regex(/[0-9]{4}/, { message: "Year must match pattern XXXX" }),
  make: z.string({ required_error: "Make is required" }).min(1, { message: "Make is required" }).max(100, { message: "Make must be less than 100 characters" }).trim(),
  model: z.string({ required_error: "Model is required" }).min(1, { message: "Model is required" }).max(100, { message: "Model must be less than 100 characters" }).trim(),
  vin: z.string({ required_error: "Vin is required" }).min(17, { message: "Vin must be at least 17 characters" }).max(17, { message: "Vin must be less than 17 characters" }).trim(),
  startMiles: z.string({ required_error: "Start Miles is required" }).min(1, { message: "Start Miles is required" }).max(100, { message: "Start Miles must be less than 100 characters" }).trim(),
  dutyType: z.enum(["MEDIUM", "HEAVY"]).default("HEAVY")
});
export {
  customerPersonalInfoSchema as c,
  truckInfoSchema as t
};
