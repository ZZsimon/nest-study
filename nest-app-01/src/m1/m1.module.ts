import { Module } from '@nestjs/common';
import { M1Service } from './m1.service';
import { M1Controller } from './m1.controller';

@Module({
  providers: [M1Service],
  controllers: [M1Controller],
})
export class M1Module {}
