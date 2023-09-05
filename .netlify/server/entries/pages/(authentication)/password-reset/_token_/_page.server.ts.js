import { a as auth, L as LuciaError } from "../../../../../chunks/lucia.js";
import { r as redirect } from "../../../../../chunks/index.js";
import { z } from "zod";
import { b as validatePasswordResetToken } from "../../../../../chunks/token.js";
import { s as superValidate, m as message } from "../../../../../chunks/superValidate.js";
import { Prisma } from "@prisma/client";
const passwordResetSchema = z.object({
  password: z.string({ required_error: "Password is required" }).min(6, { message: "Password must be at least 6 characters" }).max(32, { message: "Password must be less than 32 characters" }).trim(),
  passwordConfirm: z.string({ required_error: "Password is required" }).min(6, { message: "Password must be at least 6 characters" }).max(32, { message: "Password must be less than 32 characters" }).trim()
}).superRefine(({ password, passwordConfirm }, ctx) => {
  if (password !== passwordConfirm) {
    ctx.addIssue({
      code: "custom",
      message: "Passwords do not match",
      path: ["passwordConfirm"]
    });
  }
});
const load = async (event) => {
  const form = await superValidate(event, passwordResetSchema);
  return { form };
};
const actions = {
  default: async ({ request, params, locals }) => {
    const form = await superValidate(request, passwordResetSchema);
    console.log("form", form);
    if (!form.valid) {
      return message(form, "Form Invalid");
    }
    try {
      const { token } = params;
      const userId = await validatePasswordResetToken(token);
      let user = await auth.getUser(userId);
      await auth.invalidateAllUserSessions(user.userId);
      await auth.updateKeyPassword("email", user.email, form.data.password);
      if (!user.emailVerified) {
        user = await auth.updateUserAttributes(user.userId, {
          email_verified: true
        });
      }
      const session = await auth.createSession({
        userId: user.userId,
        attributes: {}
      });
      locals.auth.setSession(session);
    } catch (e) {
      if (e instanceof LuciaError) {
        return message(form, "Credentials Invalid, Try Again!");
      }
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        return message(form, "Internal Server Error");
      }
      if (!form.valid) {
        return message(form, "Form Invalid");
      }
      return { form };
    }
    throw redirect(302, "/");
  }
};
export {
  actions,
  load
};
