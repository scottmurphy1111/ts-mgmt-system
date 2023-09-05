import {
	c as create_ssr_component,
	s as subscribe,
	o as onDestroy,
	a as add_attribute,
	d as each,
	e as escape
} from '../../../../chunks/ssr.js';
import { c as createSearchStore } from '../../../../chunks/search.js';
const _page_svelte_svelte_type_style_lang = '';
const css = {
	code: 'tr.svelte-1hdxu1t{cursor:pointer}',
	map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $searchStore, $$unsubscribe_searchStore;
	let { data } = $$props;
	const searchStore = createSearchStore(data.trucks);
	$$unsubscribe_searchStore = subscribe(searchStore, (value) => ($searchStore = value));
	const unsubscribe = searchStore.subscribe((model) => model);
	onDestroy(() => {
		unsubscribe();
	});
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	$$result.css.add(css);
	$$unsubscribe_searchStore();
	return `<form><div class="flex w-1/3 gap-2 mb-4"><input class="input min-w-[250px]" type="text" name="search" placeholder="Search by Vin#"${add_attribute(
		'value',
		$searchStore.search,
		0
	)}> <button class="btn" type="submit" data-svelte-h="svelte-1t95b20">Search</button></div></form> <div class="table-container w-full"><table class="table bg-transparent"><thead data-svelte-h="svelte-1m3ufy"><tr class="svelte-1hdxu1t"><th>VIN #</th> <th>Year</th> <th>Make</th> <th>Model</th> <th>Start Miles</th> </tr></thead> <tbody>${each(
		$searchStore.filtered,
		(truck) => {
			return `<tr class="svelte-1hdxu1t"><td>${escape(truck.vin)}</td> <td>${escape(
				truck.year
			)}</td> <td>${escape(truck.make)}</td> <td>${escape(truck.model)}</td> <td>${escape(
				truck.startMiles
			)}</td>  </tr>`;
		}
	)}</tbody></table> </div>`;
});
export { Page as default };
