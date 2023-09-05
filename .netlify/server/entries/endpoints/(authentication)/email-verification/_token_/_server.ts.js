import { a as auth } from "../../../../../chunks/lucia.js";
import { v as validateEmailVerificationToken } from "../../../../../chunks/token.js";
const GET = async ({ params, locals }) => {
  const { token } = params;
  try {
    const userId = await validateEmailVerificationToken(token);
    const user = await auth.getUser(userId);
    await auth.invalidateAllUserSessions(user.userId);
    await auth.updateUserAttributes(user.userId, {
      email_verified: true
      // `Number(true)` if stored as an integer
    });
    const session = await auth.createSession({
      userId: user.userId,
      attributes: {}
    });
    locals.auth.setSession(session);
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/"
      }
    });
  } catch {
    return new Response("Invalid email verification link", {
      status: 400
    });
  }
};
export {
  GET
};
