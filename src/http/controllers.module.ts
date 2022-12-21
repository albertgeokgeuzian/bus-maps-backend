import { Module } from '@nestjs/common';
import { RouteModule } from 'src/domain/routes/routes.module';
import { UserModule } from 'src/domain/user/user.module';
import { AuthController } from './api/user/user.controller';
import { RouteController } from './api/routes/routes.controller';

@Module({
  imports: [UserModule, RouteModule],
  controllers: [AuthController, RouteController],
})
export class ControllersModule {}
