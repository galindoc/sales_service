import { Controller, Post, Body } from '@nestjs/common';

import { CustomersService } from './customers.service';
import { Customer } from './entity';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post('signup')
  async signUp(@Body() customerData: Partial<Customer>): Promise<Customer> {
    return this.customersService.signUp(customerData);
  }

  @Post('login')
  async login(
    @Body('identifier') identifier: string,
    @Body('password') password: string,
  ): Promise<string | null> {
    return this.customersService.login(identifier, password);
  }
}
