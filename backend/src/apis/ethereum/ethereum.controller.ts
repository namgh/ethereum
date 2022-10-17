import { Controller, Post } from '@nestjs/common';
import { EthereumService } from './ethereum.service';

@Controller('Ethereum')
export class EthereumController {
  constructor(private readonly ethereumservice: EthereumService) {}

  @Post()
  async create() {
    return await this.ethereumservice.test();
  }
}
