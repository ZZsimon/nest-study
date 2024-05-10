import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

// pipe这种类型的中间件在进入controller的handler之前会触发，因此可以对请求参数进行判断和处理
// 如果不符合要求，直接报错
@Injectable()
export class FileSizeValidatePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value', value);
    const { size } = value;
    if (size > 1024) {
      throw new HttpException('文件不能大于1k', HttpStatus.BAD_REQUEST);
    }

    return value;
  }
}
