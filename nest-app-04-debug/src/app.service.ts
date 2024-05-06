import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const vatr=123;
    return 'Hello World!';
  }
}
