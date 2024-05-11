import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { storage } from './storage';

import { existsSync, mkdirSync, cpSync, rmSync } from 'fs';
import { join } from 'path';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      storage,
    }),
  )
  uploadFiles(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body,
  ) {
    console.log('body----------: ', body);
    console.log('file----------: ', files);

    // .表示除了回车符和换行符以外的所有字符
    // +表示至少一次

    // \_表示匹配到“_”这个下划符
    // \d表示[0-9]
    // +表示至少一次

    // match会返回所有匹配到的字符串，是一个数组
    // 第二个元素是小括号()中匹配到的内容
    const fileName = body.name.match(/(.+)\_\d+$/)[1];
    const chunkDir = join(
      __dirname,
      '../../',
      'uploads/chunks---------------' + fileName,
    );

    if (!existsSync(chunkDir)) {
      mkdirSync(chunkDir);
    }
    cpSync(files[0].path, chunkDir + '/' + body.name);
    rmSync(files[0].path);
  }
}
