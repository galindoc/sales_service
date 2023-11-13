import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  comparePassword,
  hashPassword,
  generateJWT,
  generateUserVerificationToken,
} from './utils';
import { Customer } from './entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private costumerRepository: Repository<Customer>,
  ) {}

  async signUp(costumerData: Partial<Customer>): Promise<Customer> {
    const costumer = this.costumerRepository.create(costumerData);
    costumer.password = await hashPassword(costumer.password);
    costumer.verificationToken = generateUserVerificationToken();
    await this.costumerRepository.save(costumer);
    return costumer;
  }

  async login(identifier: string, password: string): Promise<string | null> {
    const costumer = await this.costumerRepository.findOne({
      where: [{ email: identifier }, { phone: identifier }],
    });
    if (costumer && (await comparePassword(password, costumer.password))) {
      return generateJWT(costumer.id);
    }
    return null;
  }
}
