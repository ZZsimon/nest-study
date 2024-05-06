import { Module } from '@nestjs/common';
import { OtherService } from './other.service';
import { OtherController } from './other.controller';

@Module({
  controllers: [OtherController],
  providers: [OtherService],
  exports:[OtherService] // 导出当前模块的Provider
})
export class OtherModule {}
