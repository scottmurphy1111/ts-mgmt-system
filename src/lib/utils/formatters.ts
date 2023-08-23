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
