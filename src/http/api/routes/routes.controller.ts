import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { RouteService } from 'src/domain/routes/routes.service';

@Controller('routes')
export class AuthController {
  constructor(private routeService: RouteService) {}

  @Get('getAll')
  async getAllRoutes() {
    return this.routeService.getAllRoutes();
  }
}
