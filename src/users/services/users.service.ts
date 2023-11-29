import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async createUser(username: string) {
    await this.checkUserNameExist(username);

    await this.saveUser(username);
  }

  private checkUserNameExist(username: string) {
    return username;
  }

  private saveUser(username: string) {
    return username;
  }
}
