import { c as client } from './prisma.js';
import { i as isWithinExpiration, g as generateRandomString } from './date.js';
const EXPIRES_IN = 1e3 * 60 * 60 * 2;
const generateEmailVerificationToken = async (userId) => {
	const storedUserTokens = await client.emailVerificationToken.findMany({
		where: {
			user_id: userId
		}
	});
	if (storedUserTokens.length > 0) {
		const reusableStoredToken = storedUserTokens.find((token2) => {
			return isWithinExpiration(Number(token2.expires) - EXPIRES_IN / 2);
		});
		if (reusableStoredToken) return reusableStoredToken.id;
	}
	const token = generateRandomString(63);
	await client.emailVerificationToken.create({
		data: {
			id: token,
			expires: /* @__PURE__ */ new Date().getTime() + EXPIRES_IN,
			user_id: userId
		}
	});
	return token;
};
const validateEmailVerificationToken = async (token) => {
	const storedToken = await client.$transaction(async (trx) => {
		const storedToken2 = await client.emailVerificationToken.findMany({
			where: {
				id: token
			}
		});
		if (!storedToken2) throw new Error('Invalid token');
		await client.emailVerificationToken.deleteMany({
			where: {
				user_id: storedToken2[0].user_id
			}
		});
		return storedToken2;
	});
	const tokenExpires = Number(storedToken[0].expires);
	if (!isWithinExpiration(tokenExpires)) {
		throw new Error('Expired token');
	}
	return storedToken[0].user_id;
};
const generatePasswordResetToken = async (userId) => {
	const storedUserTokens = await client.passwordResetToken.findMany({
		where: {
			user_id: userId
		}
	});
	if (storedUserTokens.length > 0) {
		const reusableStoredToken = storedUserTokens.find((token2) => {
			return isWithinExpiration(Number(token2.expires) - EXPIRES_IN / 2);
		});
		if (reusableStoredToken) return reusableStoredToken.id;
	}
	const token = generateRandomString(63);
	await client.passwordResetToken.create({
		data: {
			id: token,
			expires: /* @__PURE__ */ new Date().getTime() + EXPIRES_IN,
			user_id: userId
		}
	});
	return token;
};
const validatePasswordResetToken = async (token) => {
	const storedToken = await client.$transaction(async (trx) => {
		const storedToken2 = await client.passwordResetToken.findMany({
			where: {
				id: token
			}
		});
		if (!storedToken2) throw new Error('Invalid token');
		await client.passwordResetToken.deleteMany({
			where: {
				user_id: storedToken2[0].user_id
			}
		});
		return storedToken2;
	});
	const tokenExpires = Number(storedToken[0].expires);
	if (!isWithinExpiration(tokenExpires)) {
		throw new Error('Expired token');
	}
	return storedToken[0].user_id;
};
export {
	generatePasswordResetToken as a,
	validatePasswordResetToken as b,
	generateEmailVerificationToken as g,
	validateEmailVerificationToken as v
};
