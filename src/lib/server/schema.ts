import {
	datetime,
	int,
	mysqlEnum,
	mysqlTable,
	serial,
	timestamp,
	uniqueIndex,
	varchar
} from 'drizzle-orm/mysql-core';

// export const customersTable = mysqlTable(
// 	'customers',
// 	{
// 		id: serial('id').primaryKey(),
// 		firstName: varchar('name', { length: 256 }).notNull(),
// 		lastName: varchar('name', { length: 256 }).notNull(),
// 		email: varchar('email', { length: 256 }).notNull(),
// 		phone: varchar('phone', { length: 256 }).notNull(),
// 		address: varchar('address', { length: 256 }).notNull(),
// 		city: varchar('city', { length: 256 }).notNull(),
// 		state: varchar('state', { length: 256 }).notNull(),
// 		zip: varchar('zip', { length: 256 }).notNull()
// 	},
// 	(customers) => ({
// 		emailIndex: uniqueIndex('email_idx').on(customers.email),
// 		phoneIndex: uniqueIndex('phone_idx').on(customers.phone)
// 	})
// );

export const usersTable = mysqlTable('users', {
	id: serial('id').primaryKey(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').onUpdateNow().notNull(),
	first_name: varchar('first_name', { length: 255 }).notNull(),
	last_name: varchar('last_name', { length: 255 }).notNull(),
	email: varchar('email', { length: 255 }).notNull(),
	password: varchar('password', { length: 255 }).notNull()
});
