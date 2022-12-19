import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { UserService } from 'src/domain/user/user.service';

@Controller('user')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('create')
  async createUser(id: number, username: string) {
    return this.userService.createUser(id, username);
  }
}
