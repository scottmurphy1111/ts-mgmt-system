import {
	c as create_ssr_component,
	e as escape,
	v as validate_component,
	p as missing_component
} from '../../../chunks/ssr.js';
import { P as Producers } from '../../../chunks/producers.js';
const Server = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg viewBox="0 0 114 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M106.151 28.8149H7.53459C3.64431 28.8149 0.49057 25.6612 0.49057 21.7709V7.68283C0.49057 3.79255 3.64431 0.638809 7.53459 0.638809H106.151C110.041 0.638809 113.195 3.79255 113.195 7.68283V21.7709C113.195 25.6612 110.041 28.8149 106.151 28.8149ZM95.5849 9.44384C92.6671 9.44384 90.3019 11.8091 90.3019 14.7269C90.3019 17.6446 92.6671 20.0099 95.5849 20.0099C98.5026 20.0099 100.868 17.6446 100.868 14.7269C100.868 11.8091 98.5026 9.44384 95.5849 9.44384ZM81.4968 9.44384C78.5791 9.44384 76.2138 11.8091 76.2138 14.7269C76.2138 17.6446 78.5791 20.0099 81.4968 20.0099C84.4146 20.0099 86.7798 17.6446 86.7798 14.7269C86.7798 11.8091 84.4146 9.44384 81.4968 9.44384ZM106.151 64.035H7.53459C3.64431 64.035 0.49057 60.8813 0.49057 56.991V42.9029C0.49057 39.0127 3.64431 35.8589 7.53459 35.8589H106.151C110.041 35.8589 113.195 39.0127 113.195 42.9029V56.991C113.195 60.8813 110.041 64.035 106.151 64.035ZM95.5849 44.664C92.6671 44.664 90.3019 47.0292 90.3019 49.947C90.3019 52.8647 92.6671 55.23 95.5849 55.23C98.5026 55.23 100.868 52.8647 100.868 49.947C100.868 47.0292 98.5026 44.664 95.5849 44.664ZM81.4968 44.664C78.5791 44.664 76.2138 47.0292 76.2138 49.947C76.2138 52.8647 78.5791 55.23 81.4968 55.23C84.4146 55.23 86.7798 52.8647 86.7798 49.947C86.7798 47.0292 84.4146 44.664 81.4968 44.664ZM106.151 99.2551H7.53459C3.64431 99.2551 0.49057 96.1014 0.49057 92.2111V78.1231C0.49057 74.2328 3.64431 71.079 7.53459 71.079H106.151C110.041 71.079 113.195 74.2328 113.195 78.1231V92.2111C113.195 96.1014 110.041 99.2551 106.151 99.2551ZM95.5849 79.8841C92.6671 79.8841 90.3019 82.2493 90.3019 85.1671C90.3019 88.0848 92.6671 90.4501 95.5849 90.4501C98.5026 90.4501 100.868 88.0848 100.868 85.1671C100.868 82.2493 98.5026 79.8841 95.5849 79.8841ZM81.4968 79.8841C78.5791 79.8841 76.2138 82.2493 76.2138 85.1671C76.2138 88.0848 78.5791 90.4501 81.4968 90.4501C84.4146 90.4501 86.7798 88.0848 86.7798 85.1671C86.7798 82.2493 84.4146 79.8841 81.4968 79.8841Z" fill="currentColor"></path></svg>`;
});
const Unlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg viewBox="0 0 113 129" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100.629 64.4027H38.239V38.4656C38.239 28.5034 46.2138 20.2267 56.1761 20.126C66.239 20.0254 74.4654 28.2015 74.4654 38.2392V42.2644C74.4654 45.6103 77.1572 48.3021 80.5031 48.3021H88.5534C91.8993 48.3021 94.5912 45.6103 94.5912 42.2644V38.2392C94.5912 17.1072 77.3585 -0.075224 56.2264 0.000247678C35.0943 0.0757194 18.1132 17.4845 18.1132 38.6166V64.4027H12.0755C5.4088 64.4027 0 69.8115 0 76.4782V116.73C0 123.396 5.4088 128.805 12.0755 128.805H100.629C107.296 128.805 112.704 123.396 112.704 116.73V76.4782C112.704 69.8115 107.296 64.4027 100.629 64.4027ZM66.4151 102.642C66.4151 108.201 61.9119 112.705 56.3522 112.705C50.7924 112.705 46.2893 108.201 46.2893 102.642V90.5663C46.2893 85.0065 50.7924 80.5034 56.3522 80.5034C61.9119 80.5034 66.4151 85.0065 66.4151 90.5663V102.642Z" fill="currentColor"></path></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { data } = $$props;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	return `${
		data.name
			? `<h3 class="h3">Welcome ${escape(
					`${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`
			  )}</h3>`
			: ``
	} <div class="h-full p-24"><div class="flex flex-wrap gap-4 justify-center items-center"><a href="/customers" class="card card-hover shadow-md bg-secondary-to-primary-300-600-token p-8 flex flex-col gap-4 w-96" data-sveltekit-preload-data="tap"><header><h3 class="flex gap-2 h3 items-center">${validate_component(
		Server || missing_component,
		'svelte:component'
	).$$render(
		$$result,
		{},
		{},
		{}
	)}TS Mgmt System</h3></header> <section data-svelte-h="svelte-1xlqmdh"><p>Manage Customer Info</p></section> <footer data-svelte-h="svelte-mo76f"><button class="btn btn-primary">Launch</button></footer></a> <a href="/" class="card card-hover shadow-md p-8 flex flex-col gap-4 w-96"><header><h3 class="flex gap-2 h3 items-center">${validate_component(
		Producers || missing_component,
		'svelte:component'
	).$$render(
		$$result,
		{},
		{},
		{}
	)}TS Lead System</h3></header> <section data-svelte-h="svelte-b1w9sw"><p>Manage Potential Customers</p></section> <footer data-svelte-h="svelte-mo76f"><button class="btn btn-primary">Launch</button></footer></a> ${
		data.role === 'ADMIN'
			? `<a href="/admin" class="card card-hover shadow-md bg-secondary-to-primary-300-600-token p-8 flex flex-col gap-4 w-96"><header><h3 class="flex gap-2 h3 items-center">${validate_component(
					Unlock || missing_component,
					'svelte:component'
			  ).$$render(
					$$result,
					{},
					{},
					{}
			  )}TS Admin</h3></header> <section data-svelte-h="svelte-zdup7r"><p>Manage Users</p></section> <footer data-svelte-h="svelte-1q3hfbp"><button class="btn btn-primary">Launch</button></footer></a>`
			: ``
	}</div></div> `;
});
export { Page as default };
