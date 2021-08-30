import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly repository: Repository<Users>,
  ) {}

  create(name: string, authId: string, email: string) {
    const user = this.repository.create({ name, authId, email });
    return this.repository.save(user);
  }

  findOneById(id: number) {
    return this.repository.findOne(id);
  }

  findAll() {
    return this.repository.find();
  }
}
