import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(id: number, username: string) {
    const userExists = await this._checkUserExists(username);
    if (userExists) return;

    await this.prisma.user.create({
      data: {
        id,
        username,
      },
    });
  }

  private async _checkUserExists(username: string) {
    const res = await this.prisma.user.findUnique({
      where: {
        username,
      },
    });
    if (res) return true;
    return false;
  }
}
