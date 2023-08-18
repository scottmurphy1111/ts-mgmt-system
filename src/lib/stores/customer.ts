import { writable } from 'svelte/store';

// export interface CustomerStore {
//   data
// }

export const createCustomerStore = (data: any) => {
	const { subscribe, set, update } = writable({
		data
	});

	return {
		subscribe,
		set,
		update
	};
};

export const customerHandler = (store, formData) => {
	store.data = formData;
};
