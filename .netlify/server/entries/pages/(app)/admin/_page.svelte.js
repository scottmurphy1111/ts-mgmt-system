import {
	c as create_ssr_component,
	v as validate_component,
	p as missing_component
} from '../../../../chunks/ssr.js';
import { P as Programs, S as SalesReps, C as Customers } from '../../../../chunks/salesReps.js';
const Hat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg viewBox="0 0 78 67" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.2783 2.26348C35.8941 -0.754576 41.8586 -0.754465 46.4744 2.26364L76.4932 21.8923C77.2713 22.4009 77.7428 23.2648 77.7505 24.1941C77.7578 25.1235 77.3001 25.9949 76.5304 26.5158L46.6592 46.7367C41.9585 49.9189 35.7942 49.9189 31.0934 46.7372L5.55361 29.4491V46.986C5.55361 48.5194 4.31038 49.7628 2.7768 49.7628C1.24323 49.7628 0 48.5194 0 46.986V24.7716C0 24.6776 0.0046652 24.5847 0.0137731 24.4931C0.00394323 24.3943 -0.000710711 24.2946 0.000111223 24.1941C0.00749752 23.2648 0.479388 22.4008 1.25723 21.8922L31.2783 2.26348Z" fill="currentColor"></path><path d="M11.1072 52.5395V39.9146L27.9803 51.336C34.5614 55.7906 43.1915 55.7906 49.7724 51.3355L66.6433 39.915V52.5395C66.6433 53.1987 66.4089 53.8357 65.9824 54.3378C65.9824 54.3378 65.9824 54.3378 63.8665 52.5395L65.9824 54.3378L65.9746 54.3467L65.9641 54.3594L65.9313 54.3972L65.8241 54.5183C65.7342 54.6182 65.607 54.7571 65.4437 54.9292C65.1172 55.273 64.6446 55.7501 64.032 56.3154C62.8091 57.4445 61.0175 58.9367 58.7078 60.4268C54.0949 63.4029 47.3298 66.4235 38.8758 66.4235C30.4217 66.4235 23.6564 63.4029 19.0433 60.4268C16.7337 58.9367 14.942 57.4445 13.7188 56.3154C13.1063 55.7501 12.6336 55.273 12.307 54.9292C12.1436 54.7576 12.0164 54.6188 11.9265 54.5183L11.8193 54.3972L11.7868 54.3594L11.7758 54.3467L11.7716 54.3417L13.884 52.5395C11.7683 54.3383 11.7716 54.3417 11.7716 54.3417C11.3448 53.8396 11.1072 53.1987 11.1072 52.5395Z" fill="currentColor"></path></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h2 class="h2" data-svelte-h="svelte-104pzk8">Admin</h2> <div class="flex gap-4 py-4 flex-wrap"><a class="card card-hover shadow-md p-8 flex flex-col gap-4 w-96" href="/admin/programs"><header><h3 class="flex gap-2 h3 items-center">${validate_component(
		Programs || missing_component,
		'svelte:component'
	).$$render(
		$$result,
		{},
		{},
		{}
	)}Programs</h3></header> <section data-svelte-h="svelte-xgqdgp"><p>Manage TS Programs</p></section> <footer data-svelte-h="svelte-772uod"><button class="btn btn-primary">Launch</button></footer></a> <a class="card card-hover shadow-md p-8 flex flex-col gap-4 w-96" href="/admin/sales-reps"><header><h3 class="flex gap-2 h3 items-center">${validate_component(
		SalesReps || missing_component,
		'svelte:component'
	).$$render(
		$$result,
		{},
		{},
		{}
	)}Sales Reps</h3></header> <section data-svelte-h="svelte-sojvb8"><p>Manage TS Sales Reps</p></section> <footer data-svelte-h="svelte-772uod"><button class="btn btn-primary">Launch</button></footer></a> <a class="card card-hover shadow-md p-8 flex flex-col gap-4 w-96" href="/admin/users"><header><h3 class="flex gap-2 h3 items-center">${validate_component(
		Customers || missing_component,
		'svelte:component'
	).$$render(
		$$result,
		{},
		{},
		{}
	)}Users</h3></header> <section data-svelte-h="svelte-13gis94"><p>Manage TS Users</p></section> <footer data-svelte-h="svelte-772uod"><button class="btn btn-primary">Launch</button></footer></a> <a class="card card-hover shadow-md p-8 flex flex-col gap-4 w-96" href="/admin/roles"><header><h3 class="flex gap-2 h3 items-center">${validate_component(
		Hat || missing_component,
		'svelte:component'
	).$$render(
		$$result,
		{},
		{},
		{}
	)}Roles</h3></header> <section data-svelte-h="svelte-18skdi2"><p>Manage TS User Roles</p></section> <footer data-svelte-h="svelte-772uod"><button class="btn btn-primary">Launch</button></footer></a></div> `;
});
export { Page as default };
