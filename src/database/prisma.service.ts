import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: [
        // { emit: `event`, level: `query` },
        // { emit: `stdout`, level: `info` },
        // { emit: `stdout`, level: `warn` },
        // { emit: `stdout`, level: `error` },
      ],
    });
    this.$on<any>('query', (e) => {
      console.log(e);
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
