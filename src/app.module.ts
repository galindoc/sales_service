import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomersModule } from './customers/customers.module';
import typeOrmConfig from './config/db.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), CustomersModule],
})
export class AppModule {}
