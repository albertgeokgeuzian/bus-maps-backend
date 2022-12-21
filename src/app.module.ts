import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllersModule } from './http/controllers.module';

@Module({
  imports: [ControllersModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
