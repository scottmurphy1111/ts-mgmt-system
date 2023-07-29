import { int, mysqlEnum, mysqlTable, serial, uniqueIndex, varchar } from 'drizzle-orm/mysql-core';

// // declaring enum in database
// export const countries = mysqlTable('countries', {
//   id: serial('id').primaryKey(),
//   name: varchar('name', { length: 256 }),
// }, (countries) => ({
//   nameIndex: uniqueIndex('name_idx').on(countries.name),
// }));

// export const cities = mysqlTable('cities', {
//   id: serial('id').primaryKey(),
//   name: varchar('name', { length: 256 }),
//   countryId: int('country_id').references(() => countries.id),
//   popularity: mysqlEnum('popularity', ['unknown', 'known', 'popular']),
// });

export const customersTable = mysqlTable(
	'customers',
	{
		id: serial('id').primaryKey(),
		firstName: varchar('name', { length: 256 }),
		lastName: varchar('name', { length: 256 }),
		email: varchar('email', { length: 256 }),
		phone: varchar('phone', { length: 256 }),
		address: varchar('address', { length: 256 }),
		city: varchar('city', { length: 256 }),
		state: varchar('state', { length: 256 }),
		zip: varchar('zip', { length: 256 })
	},
	(customers) => ({
		emailIndex: uniqueIndex('email_idx').on(customers.email),
		phoneIndex: uniqueIndex('phone_idx').on(customers.phone)
	})
);
