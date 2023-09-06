import { env } from '$env/dynamic/private';

export const LOCAL = env.NODE_ENV === 'development' ? true : false;
export const NETLIFY = env.NODE_ENV === 'netlify' ? true : false;
export const PROD = env.NODE_ENV === 'production' ? true : false;

export const APP_DOMAIN = () => {
	if (LOCAL) return 'http://localhost:5173';
	if (NETLIFY) return 'https://ts-mgmt-system.netlify.app';
	if (PROD) return 'https://ts-mgmt-system.trucksuite.com';
};
