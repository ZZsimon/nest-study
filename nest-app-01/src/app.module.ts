import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { M1Module } from './m1/m1.module';
import { BbbModule } from './bbb/bbb.module';
import { CccController } from './ccc.controller';
import { DddController } from './ddd/ddd.controller';
import { CccController } from './ccc/ccc.controller';
import { CccController } from './ccc.controller';

@Module({
  imports: [M1Module, BbbModule],
  controllers: [AppController, CccController, DddController],
  providers: [AppService],
})
export class AppModule {}
