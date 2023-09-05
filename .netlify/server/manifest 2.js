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
				start: '_app/immutable/entry/start.85b44f08.js',
				app: '_app/immutable/entry/app.dec15fca.js',
				imports: [
					'_app/immutable/entry/start.85b44f08.js',
					'_app/immutable/chunks/scheduler.33a0ffd3.js',
					'_app/immutable/chunks/singletons.34b04365.js',
					'_app/immutable/chunks/paths.8c540dc7.js',
					'_app/immutable/chunks/parse.7d180a0f.js',
					'_app/immutable/entry/app.dec15fca.js',
					'_app/immutable/chunks/scheduler.33a0ffd3.js',
					'_app/immutable/chunks/index.d420ef29.js'
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
				__memo(() => import('./nodes/17.js'))
			],
			routes: [
				{
					id: '/(authentication)',
					pattern: /^\/?$/,
					params: [],
					page: { layouts: [0, 4], errors: [1, ,], leaf: 15 },
					endpoint: null
				},
				{
					id: '/(app)/admin/users',
					pattern: /^\/admin\/users\/?$/,
					params: [],
					page: { layouts: [0, 2, 3], errors: [1, , ,], leaf: 5 },
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
					page: { layouts: [0, 2], errors: [1, ,], leaf: 6 },
					endpoint: null
				},
				{
					id: '/(app)/customers/[id]',
					pattern: /^\/customers\/([^/]+?)\/?$/,
					params: [{ name: 'id', optional: false, rest: false, chained: false }],
					page: { layouts: [0, 2], errors: [1, ,], leaf: 7 },
					endpoint: null
				},
				{
					id: '/(app)/launch',
					pattern: /^\/launch\/?$/,
					params: [],
					page: { layouts: [0, 2], errors: [1, ,], leaf: 8 },
					endpoint: null
				},
				{
					id: '/(authentication)/login',
					pattern: /^\/login\/?$/,
					params: [],
					page: { layouts: [0, 4], errors: [1, ,], leaf: 16 },
					endpoint: null
				},
				{
					id: '/(app)/producers',
					pattern: /^\/producers\/?$/,
					params: [],
					page: { layouts: [0, 2], errors: [1, ,], leaf: 9 },
					endpoint: null
				},
				{
					id: '/(app)/programs',
					pattern: /^\/programs\/?$/,
					params: [],
					page: { layouts: [0, 2], errors: [1, ,], leaf: 10 },
					endpoint: null
				},
				{
					id: '/(app)/reports',
					pattern: /^\/reports\/?$/,
					params: [],
					page: { layouts: [0, 2], errors: [1, ,], leaf: 11 },
					endpoint: null
				},
				{
					id: '/(app)/sales-reps',
					pattern: /^\/sales-reps\/?$/,
					params: [],
					page: { layouts: [0, 2], errors: [1, ,], leaf: 12 },
					endpoint: null
				},
				{
					id: '/(authentication)/signup',
					pattern: /^\/signup\/?$/,
					params: [],
					page: { layouts: [0, 4], errors: [1, ,], leaf: 17 },
					endpoint: null
				},
				{
					id: '/(app)/trucks',
					pattern: /^\/trucks\/?$/,
					params: [],
					page: { layouts: [0, 2], errors: [1, ,], leaf: 13 },
					endpoint: null
				},
				{
					id: '/(app)/trucks/[id]',
					pattern: /^\/trucks\/([^/]+?)\/?$/,
					params: [{ name: 'id', optional: false, rest: false, chained: false }],
					page: { layouts: [0, 2], errors: [1, ,], leaf: 14 },
					endpoint: null
				}
			],
			matchers: async () => {
				return {};
			}
		}
	};
})();
