import { Options, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Permission, User } from './example.test';

const config: Options = {
	metadataProvider: TsMorphMetadataProvider,
	entities: [Permission, User],

	driver: PostgreSqlDriver,
	dbName: 'db',
	host: 'localhost',
	port: 5432,
	user: 'admin',
	password: 'admin'
};

export default config;
