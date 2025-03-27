import { Injectable } from '@nestjs/common';
import { postgres } from 'lib/postgres';

@Injectable()
export class UsersService {
  async fetchAllUsers() {
    return await postgres.user.findMany();
  }
}
