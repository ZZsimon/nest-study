import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  arrs: string[];

  constructor() {
    this.arrs = [];
  }

  getHello(): string {
    // const str: string = 'asyqqedadafafa';

    // for (let index = 0; index < 10000000000; index++) {
    //   this.arrs.push(str);
    // }

    return 'Hello World!';
  }
}
