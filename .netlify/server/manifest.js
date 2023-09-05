export const manifest = (() => {
	function __memo(fn) {
		let value;
		return () => (value ??= value = fn());
	}

	return {
		appDir: '_app',
		appPath: '_app',
		assets: new Set([
			'bg-transparent.png',
			'favicon.png',
			'fonts/Montserrat-Italic-VariableFont_wght.ttf',
			'fonts/Montserrat-VariableFont_wght.ttf'
		]),
		mimeTypes: { '.png': 'image/png', '.ttf': 'font/ttf' },
		_: {
			client: {
				start: '_app/immutable/entry/start.0800c160.js',
				app: '_app/immutable/entry/app.e28b083f.js',
				imports: [
					'_app/immutable/entry/start.0800c160.js',
					'_app/immutable/chunks/scheduler.e738ec2c.js',
					'_app/immutable/chunks/singletons.d4806386.js',
					'_app/immutable/chunks/paths.78b93b07.js',
					'_app/immutable/chunks/parse.7d180a0f.js',
					'_app/immutable/entry/app.e28b083f.js',
					'_app/immutable/chunks/scheduler.e738ec2c.js',
					'_app/immutable/chunks/index.90039f23.js'
				],
				stylesheets: [],
				fonts: []
			},
			nodes: [
				__memo(() => import('./nodes/0.js')),
				__memo(() => import('./nodes/1.js')),
				__memo(() => import('./nodes/2.js')),
				__memo(() => import('./nodes/3.js')),
				__memo(() => import('./nodes/4.js')),
				__memo(() => import('./nodes/5.js')),
				__memo(() => import('./nodes/6.js')),
				__memo(() => import('./nodes/7.js')),
				__memo(() => import('./nodes/8.js')),
				__memo(() => import('./nodes/9.js')),
				__memo(() => import('./nodes/10.js')),
				__memo(() => import('./nodes/11.js')),
				__memo(() => import('./nodes/12.js')),
				__memo(() => import('./nodes/13.js')),
				__memo(() => import('./nodes/14.js')),
				__memo(() => import('./nodes/15.js')),
				__memo(() => import('./nodes/16.js')),
				__memo(() => import('./nodes/17.js')),
				__memo(() => import('./nodes/18.js')),
				__memo(() => import('./nodes/19.js')),
				__memo(() => import('./nodes/20.js')),
				__memo(() => import('./nodes/21.js')),
				__memo(() => import('./nodes/22.js')),
				__memo(() => import('./nodes/23.js')),
				__memo(() => import('./nodes/24.js')),
				__memo(() => import('./nodes/25.js')),
				__memo(() => import('./nodes/26.js')),
				__memo(() => import('./nodes/27.js'))
			],
			routes: [
				{
					id: '/(authentication)',
					pattern: /^\/?$/,
					params: [],
					page: { layouts: [0, 6], errors: [1, ,], leaf: 22 },
					endpoint: null
				},
				{
					id: '/(app)/admin',
					pattern: /^\/admin\/?$/,
					params: [],
					page: { layouts: [0, 2, 4], errors: [1, 3, ,], leaf: 7 },
					endpoint: null
				},
				{
					id: '/(app)/admin/programs',
					pattern: /^\/admin\/programs\/?$/,
					params: [],
					page: { layouts: [0, 2, 4], errors: [1, 3, ,], leaf: 8 },
					endpoint: null
				},
				{
					id: '/(app)/admin/programs/[id]',
					pattern: /^\/admin\/programs\/([^/]+?)\/?$/,
					params: [{ name: 'id', optional: false, rest: false, chained: false }],
					page: { layouts: [0, 2, 4], errors: [1, 3, ,], leaf: 9 },
					endpoint: null
				},
				{
					id: '/(app)/admin/roles',
					pattern: /^\/admin\/roles\/?$/,
					params: [],
					page: { layouts: [0, 2, 4], errors: [1, 3, ,], leaf: 10 },
					endpoint: null
				},
				{
					id: '/(app)/admin/sales-reps',
					pattern: /^\/admin\/sales-reps\/?$/,
					params: [],
					page: { layouts: [0, 2, 4], errors: [1, 3, ,], leaf: 11 },
					endpoint: null
				},
				{
					id: '/(app)/admin/users',
					pattern: /^\/admin\/users\/?$/,
					params: [],
					page: { layouts: [0, 2, 4], errors: [1, 3, ,], leaf: 12 },
					endpoint: null
				},
				{
					id: '/api/customers',
					pattern: /^\/api\/customers\/?$/,
					params: [],
					page: null,
					endpoint: __memo(() => import('./entries/endpoints/api/customers/_server.ts.js'))
				},
				{
					id: '/api/customer',
					pattern: /^\/api\/customer\/?$/,
					params: [],
					page: null,
					endpoint: __memo(() => import('./entries/endpoints/api/customer/_server.ts.js'))
				},
				{
					id: '/api/logout',
					pattern: /^\/api\/logout\/?$/,
					params: [],
					page: null,
					endpoint: __memo(() => import('./entries/endpoints/api/logout/_server.ts.js'))
				},
				{
					id: '/api/trucks',
					pattern: /^\/api\/trucks\/?$/,
					params: [],
					page: null,
					endpoint: __memo(() => import('./entries/endpoints/api/trucks/_server.ts.js'))
				},
				{
					id: '/api/truck',
					pattern: /^\/api\/truck\/?$/,
					params: [],
					page: null,
					endpoint: __memo(() => import('./entries/endpoints/api/truck/_server.ts.js'))
				},
				{
					id: '/(app)/customers',
					pattern: /^\/customers\/?$/,
					params: [],
					page: { layouts: [0, 2], errors: [1, 3], leaf: 13 },
					endpoint: null
				},
				{
					id: '/(app)/customers/[id]',
					pattern: /^\/customers\/([^/]+?)\/?$/,
					params: [{ name: 'id', optional: false, rest: false, chained: false }],
					page: { layouts: [0, 2, 5], errors: [1, 3, ,], leaf: 14 },
					endpoint: null
				},
				{
					id: '/(app)/customers/[id]/personal-info',
					pattern: /^\/customers\/([^/]+?)\/personal-info\/?$/,
					params: [{ name: 'id', optional: false, rest: false, chained: false }],
					page: { layouts: [0, 2, 5], errors: [1, 3, ,], leaf: 15 },
					endpoint: null
				},
				{
					id: '/(app)/customers/[id]/trucks',
					pattern: /^\/customers\/([^/]+?)\/trucks\/?$/,
					params: [{ name: 'id', optional: false, rest: false, chained: false }],
					page: { layouts: [0, 2, 5], errors: [1, 3, ,], leaf: 16 },
					endpoint: null
				},
				{
					id: '/(authentication)/email-verification',
					pattern: /^\/email-verification\/?$/,
					params: [],
					page: { layouts: [0, 6], errors: [1, ,], leaf: 23 },
					endpoint: null
				},
				{
					id: '/(authentication)/email-verification/[token]',
					pattern: /^\/email-verification\/([^/]+?)\/?$/,
					params: [{ name: 'token', optional: false, rest: false, chained: false }],
					page: null,
					endpoint: __memo(() =>
						import('./entries/endpoints/(authentication)/email-verification/_token_/_server.ts.js')
					)
				},
				{
					id: '/(app)/launch',
					pattern: /^\/launch\/?$/,
					params: [],
					page: { layouts: [0, 2], errors: [1, 3], leaf: 17 },
					endpoint: null
				},
				{
					id: '/(authentication)/login',
					pattern: /^\/login\/?$/,
					params: [],
					page: { layouts: [0, 6], errors: [1, ,], leaf: 24 },
					endpoint: null
				},
				{
					id: '/(authentication)/password-reset',
					pattern: /^\/password-reset\/?$/,
					params: [],
					page: { layouts: [0, 6], errors: [1, ,], leaf: 25 },
					endpoint: null
				},
				{
					id: '/(authentication)/password-reset/[token]',
					pattern: /^\/password-reset\/([^/]+?)\/?$/,
					params: [{ name: 'token', optional: false, rest: false, chained: false }],
					page: { layouts: [0, 6], errors: [1, ,], leaf: 26 },
					endpoint: null
				},
				{
					id: '/(app)/producers',
					pattern: /^\/producers\/?$/,
					params: [],
					page: { layouts: [0, 2], errors: [1, 3], leaf: 18 },
					endpoint: null
				},
				{
					id: '/(app)/reports',
					pattern: /^\/reports\/?$/,
					params: [],
					page: { layouts: [0, 2], errors: [1, 3], leaf: 19 },
					endpoint: null
				},
				{
					id: '/(authentication)/signup',
					pattern: /^\/signup\/?$/,
					params: [],
					page: { layouts: [0, 6], errors: [1, ,], leaf: 27 },
					endpoint: null
				},
				{
					id: '/(app)/trucks',
					pattern: /^\/trucks\/?$/,
					params: [],
					page: { layouts: [0, 2], errors: [1, 3], leaf: 20 },
					endpoint: null
				},
				{
					id: '/(app)/trucks/[id]',
					pattern: /^\/trucks\/([^/]+?)\/?$/,
					params: [{ name: 'id', optional: false, rest: false, chained: false }],
					page: { layouts: [0, 2], errors: [1, 3], leaf: 21 },
					endpoint: null
				}
			],
			matchers: async () => {
				return {};
			}
		}
	};
})();
