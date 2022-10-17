import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

@Injectable()
export class EthereumService {
  async test() {
    const provider = new ethers.providers.InfuraProvider(
      'homestead',
      process.env.INFURA_KEY,
    );

    const balance = await provider.getBalance(process.env.WALLET_KEY);

    const temp = await provider.getGasPrice();
    console.log(temp);
    console.log(balance);
  }
}
