import { r as redirect } from "../../../chunks/index.js";
const load = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (!session)
    throw redirect(302, "/login");
  return {
    id: session.user.userId,
    name: session.user.name,
    email: session.user.email,
    role: session.user.role
  };
};
export {
  load
};
