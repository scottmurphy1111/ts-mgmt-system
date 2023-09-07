import { generateRandomString, isWithinExpiration } from 'lucia/utils';

import { client } from './prisma';

const EXPIRES_IN = 1000 * 60 * 60 * 2; // 2 hours

// Email verification token
export const generateEmailVerificationToken = async (userId: string) => {
	const storedUserTokens = await client.emailVerificationToken.findMany({
		where: {
			user_id: userId
		}
	});
	if (storedUserTokens.length > 0) {
		const reusableStoredToken = storedUserTokens.find((token) => {
			// check if expiration is within 1 hour
			// and reuse the token if true
			return isWithinExpiration(Number(token.expires) - EXPIRES_IN / 2);
		});
		if (reusableStoredToken) return reusableStoredToken.id;
	}
	const token = generateRandomString(63);
	await client.emailVerificationToken.create({
		data: {
			id: token,
			expires: new Date().getTime() + EXPIRES_IN,
			user_id: userId
		}
	});

	return token;
};

export const validateEmailVerificationToken = async (token: string) => {
	const storedToken = await client.$transaction(async (trx) => {
		const storedToken = await client.emailVerificationToken.findMany({
			where: {
				id: token
			}
		});
		if (!storedToken) throw new Error('Invalid token');
		await client.emailVerificationToken.deleteMany({
			where: {
				user_id: storedToken[0].user_id
			}
		});
		return storedToken;
	});
	const tokenExpires = Number(storedToken[0].expires); // bigint => number conversion
	if (!isWithinExpiration(tokenExpires)) {
		throw new Error('Expired token');
	}
	return storedToken[0].user_id;
};

// Password reset token
export const generatePasswordResetToken = async (userId: string) => {
	const storedUserTokens = await client.passwordResetToken.findMany({
		where: {
			user_id: userId
		}
	});

	if (storedUserTokens.length > 0) {
		const reusableStoredToken = storedUserTokens.find((token) => {
			// check if expiration is within 1 hour
			// and reuse the token if true
			return isWithinExpiration(Number(token.expires) - EXPIRES_IN / 2);
		});
		if (reusableStoredToken) return reusableStoredToken.id;
	}
	const token = generateRandomString(63);
	await client.passwordResetToken.create({
		data: {
			id: token,
			expires: new Date().getTime() + EXPIRES_IN,
			user_id: userId
		}
	});

	return token;
};

export const validatePasswordResetToken = async (token: string) => {
	const storedToken = await client.$transaction(async (trx) => {
		const storedToken = await client.passwordResetToken.findMany({
			where: {
				id: token
			}
		});

		if (!storedToken) throw new Error('Invalid token');
		await client.passwordResetToken.deleteMany({
			where: {
				user_id: storedToken[0].user_id
			}
		});
		return storedToken;
	});
	const tokenExpires = Number(storedToken[0].expires); // bigint => number conversion
	if (!isWithinExpiration(tokenExpires)) {
		throw new Error('Expired token');
	}
	return storedToken[0].user_id;
};
