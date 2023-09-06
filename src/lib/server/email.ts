import nodemailer from 'nodemailer';

import { env } from '$env/dynamic/private';
import { APP_DOMAIN } from '$lib/const/constants';

const transporter = nodemailer.createTransport({
	host: 'smtp.sendgrid.net',
	port: 587,
	secure: false,
	auth: {
		user: 'apikey',
		pass: env.SENDGRID_API_KEY
	}
});

const sendEmailVerify = (email: string, url: string) => {
	const requestOptions = {
		from: 'smurphy.elementpictures@gmail.com',
		to: email,
		subject: 'Verify your email',
		html: `<a href="${url}">Click here to verify your email</a>`
	};

	return transporter.sendMail(requestOptions).then((info) => {
		// console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
	});
};

const sendEmailPasswordReset = (email: string, url: string) => {
	const requestOptions = {
		from: 'smurphy.elementpictures@gmail.com',
		to: email,
		subject: 'Reset your password',
		html: `<a href="${url}">Click here to change your password</a>`
	};

	return transporter.sendMail(requestOptions);
};

export const sendEmailVerificationLink = async (email: string, token: string) => {
	const url = `${APP_DOMAIN()}/email-verification/${token}`;
	await sendEmailVerify(email, url);
};

export const sendPasswordResetLink = async (email: string, token: string) => {
	const url = `${APP_DOMAIN()}/password-reset/${token}`;
	return await sendEmailPasswordReset(email, url);
};
