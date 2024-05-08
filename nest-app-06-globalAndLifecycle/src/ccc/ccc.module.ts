import { Module, OnModuleInit, OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

import { CccService } from './ccc.service';
import { CccController } from './ccc.controller';


@Module({
  controllers: [CccController],
  providers: [CccService],
})
export class CccModule implements OnModuleInit, OnApplicationBootstrap, OnApplicationShutdown {
  constructor(
    private moduleRef: ModuleRef) { }


  onModuleInit() {
    console.log('CccModule OnModuleInit');
  }

  onApplicationBootstrap() {
    console.log('CccModule OnApplicationBootstrap');
  }

  onApplicationShutdown() {
    const cccService = this.moduleRef.get<CccService>(CccService);
    console.log('--------------------------', cccService.findAll());

    console.log('CccModule onApplicationShutdown ');
  }
}
