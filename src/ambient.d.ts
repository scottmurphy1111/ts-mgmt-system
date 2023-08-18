export type Database = {
	user: {
		id: string;
		email: string;
		password: string;
		created_at: string;
		modified_at: string;
	};

	customer: {
		id: string;
		createdAt: string;
		firstName: string;
		lastName: string;
		email: string;
		phone: string;
		address: string;
		city: string;
		state: string;
		zip: string;
		trucks?: Truck[];
	};

	truck: {
		id: string;
		createdAt: string;
		year: string;
		make: string;
		model: string;
		vin: string;
		startMiles: string;
		customers?: Customer[];
	};
};
