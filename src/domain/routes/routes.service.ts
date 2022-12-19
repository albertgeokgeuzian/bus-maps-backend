import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class RouteService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllRoutes() {
    return this.prisma.busRoutes.findMany();
  }
}
