import formatISO from 'date-fns/formatISO';

export const formatPhoneInput = (phoneInput: HTMLInputElement) => {
	phoneInput.addEventListener('keyup', () => {
		const length = phoneInput.value.length;
		if (length === 10) {
			const numArr = phoneInput.value.split('');
			numArr.map((num, i) => {
				if (i === 3 || i === 7) {
					numArr.splice(i, 0, '-');
				}
			});
			phoneInput.value = numArr.join('');
		}
	});
};

export const convertToIso = (val: string | undefined) => {
	if (val) {
		const date = new Date(val);
		const formatted = formatISO(date);

		console.log('formatted', formatted);
		return formatted;
	}
};
