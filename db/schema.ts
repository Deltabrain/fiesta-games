import { sqliteTable, integer } from 'drizzle-orm/sqlite-core';

export const games = sqliteTable('games', {
	id: integer(),
});
