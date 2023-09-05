import { a as auth } from "../../../../chunks/lucia.js";
import { j as json } from "../../../../chunks/index.js";
const POST = async (req) => {
  const session = await req.locals.auth.validate();
  await auth.invalidateSession(session?.sessionId);
  req.locals.auth.setSession(null);
  return json({ success: true });
};
export {
  POST
};
