import { Inject, Injectable } from '@nestjs/common';
import { CreateBbbDto } from './dto/create-bbb.dto';
import { UpdateBbbDto } from './dto/update-bbb.dto';
import { AaaService } from 'src/aaa/aaa.service';

@Injectable()
export class BbbService {
  // 在nest中，Service既可以被注入也可以注入到其他类中
  @Inject()
  private readonly aaaService: AaaService;

  create(createBbbDto: CreateBbbDto) {
    return 'This action adds a new bbb';
  }

  findAll() {
    return `This action returns all bbb` + this.aaaService.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} bbb`;
  }

  update(id: number, updateBbbDto: UpdateBbbDto) {
    return `This action updates a #${id} bbb`;
  }

  remove(id: number) {
    return `This action removes a #${id} bbb`;
  }
}
