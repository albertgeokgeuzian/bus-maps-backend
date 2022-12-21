import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { StrictValidationPipe } from 'src/core/validations/validation.pipe';
import { UserService } from 'src/domain/user/user.service';
import { CreateUserInput } from './types';

@Controller('user')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('create')
  async createUser(@Body(StrictValidationPipe) input: CreateUserInput) {
    try {
      if (!input.username) return;
      return await this.userService.createUser(input.id, input.username);
    } catch (error) {
      console.error(error);
    }
  }
}
