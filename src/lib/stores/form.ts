import { writable } from 'svelte/store';

export type FormStatus = 'idle' | 'editing' | 'saving' | 'success' | 'error';

// export type FormStoreData<T extends Record<PropertyKey, any>> = T;

// export interface FormStore<T extends Record<PropertyKey, any>> {
// 	data?: FormStoreData<T>;
// 	updateForm?: (newVal: FormStoreData<T>) => void;
// 	resetForm?: () => void;

// 	status: FormStatus;
// 	updateStatus?: (status: FormStatus) => void;
// 	subscribe?: (
// 		run: (value: { data: FormStoreData<T>; status: FormStatus }) => void,
// 		invalidate?: (value?: { data: T; status: FormStatus }) => void
// 	) => () => void;
// }

export type FormStoreModel<T extends Record<PropertyKey, any>> = {
	data: T;
	status: FormStatus;
};

export const createFormStore = <T extends Record<PropertyKey, any>>({
	data = {} as T,
	status = 'idle'
}: {
	data: T;
	status: FormStatus;
}) => {
	const { subscribe, set, update } = writable<FormStoreModel<T>>({
		data: data,
		status: status
	});

	return {
		subscribe,
		set,
		updateFormData: (newVals: T) => {
			update((prev) => {
				return {
					...prev,
					data: {
						...prev.data,
						...newVals
					}
				};
			});
		},
		updateStatus: (status: FormStatus) => {
			update((prev) => {
				return {
					...prev,
					status
				};
			});
		},
		resetFormData: () => {
			update((prev) => {
				return {
					...prev,
					status: 'idle'
				};
			});
		}
	};
};
