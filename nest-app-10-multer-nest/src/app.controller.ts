import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  Body,
  UsePipes,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  HttpException,
} from '@nestjs/common';
import { AppService } from './app.service';
import {
  FileInterceptor,
  FilesInterceptor,
  FileFieldsInterceptor,
} from '@nestjs/platform-express';
import { storage } from './storage';
import { FileSizeValidatePipe } from './file-size-validate.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('aaa')
  @UseInterceptors(
    FileInterceptor('file', {
      storage,
      // dest: 'uploads',
    }),
  )
  // @UsePipes(FileSizeValidatePipe)
  uploadFile(
    // @UploadedFile(FileSizeValidatePipe) file: Express.Multer.File, // 第一种验证参数的方式（自定义pipe）
    @UploadedFile(
      // 第二种验证参数的方式（使用nest内置的ParseFilePipe）
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 124 }),
          new FileTypeValidator({ fileType: 'image/png' }),
        ],
        // 还可以自定义返回错误
        exceptionFactory(error) {
          throw new HttpException('上传失败：' + error, 400);
        },
      }),
    )
    file: Express.Multer.File,
    @Body() body,
  ) {
    console.log('body----------: ', body);
    console.log('file----------: ', file);
  }

  @Post('bbb')
  @UseInterceptors(
    FilesInterceptor('files', 3, {
      storage,
    }),
  )
  uploadFiles(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body,
  ) {
    console.log('body----------: ', body);
    console.log('file----------: ', files);
  }

  @Post('ccc')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'files1', maxCount: 1 },
        { name: 'files2', maxCount: 2 },
      ],
      {
        storage,
      },
    ),
  )
  uploadFileFields(
    @UploadedFiles()
    files: { files1?: Express.Multer.File[]; files2?: Express.Multer.File[] },
    @Body() body,
  ) {
    console.log('body----------: ', body);
    console.log('file----------: ', files);
  }
}
