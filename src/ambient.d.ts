type Database = {
	user: {
		id: string;
		email: string;
		password: string;
		created_at: string;
		modified_at: string;
	};

	customer: {
		id: string;
		firstName: string;
		lastName: string;
		email: string;
		phone: string;
		address: string;
		city: string;
		state: string;
		zip: string;
	};
};
