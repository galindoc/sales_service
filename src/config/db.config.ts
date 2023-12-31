import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { Customer } from '../customers/entity';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Customer],
  synchronize: true,
};

export default typeOrmConfig;
