import { Module } from '@nestjs/common';

import { RouteService } from './routes.service';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [RouteService],
  exports: [RouteService],
})
export class RouteModule {}
