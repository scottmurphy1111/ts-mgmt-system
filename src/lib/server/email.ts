import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: 'smtp.sendgrid.net',
	port: 587,
	secure: false,
	auth: {
		user: 'apikey',
		pass: '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'
	}
});

const sendEmailVerify = (email: string, url: string) => {
	const requestOptions = {
		from: 'smurphy.elementpictures@gmail.com',
		to: email,
		subject: 'Verify your email',
		html: `<a href="${url}">Click here to verify your email</a>`
	};

	transporter.sendMail(requestOptions).then((info) => {
		console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
	});
};

const sendEmailPasswordReset = (email: string, url: string) => {
	const requestOptions = {
		from: 'smurphy.elementpictures@gmail.com',
		to: email,
		subject: 'Reset your password',
		html: `<a href="${url}">Click here to change your password</a>`
	};

	transporter.sendMail(requestOptions).then((info) => {
		console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
	});
};

export const sendEmailVerificationLink = async (email: string, token: string) => {
	const url = `http://localhost:5173/email-verification/${token}`;
	await sendEmailVerify(email, url);
};

export const sendPasswordResetLink = async (email: string, token: string) => {
	const url = `http://localhost:5173/password-reset/${token}`;
	await sendEmailPasswordReset(email, url);
};
