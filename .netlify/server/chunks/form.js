import { w as writable } from './index2.js';
const createFormStore = ({ data = {}, status = 'idle' }) => {
	const { subscribe, set, update } = writable({
		data,
		status
	});
	return {
		subscribe,
		set,
		updateFormData: (newVals) => {
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
		updateStatus: (status2) => {
			update((prev) => {
				return {
					...prev,
					status: status2
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
export { createFormStore as c };
