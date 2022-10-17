import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { RedisClientOptions } from 'redis';
import * as redisStore from 'cache-manager-redis-store';
import { EthereumModule } from './apis/ethereum/ethereum.module';

@Module({
  imports: [
    EthereumModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1q2w3e4r',
      database: 'ethereum',
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),

    ConfigModule.forRoot({ isGlobal: true }), //
    // CacheModule.register<RedisClientOptions>({
    //   store: redisStore,
    //   url: 'redis://my_redis:6379',
    //   isGlobal: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
