import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { itemEntity } from './database/item.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'sqlite',
      database:'db',
      entities:['dist/**/*.entity{.ts,.js}'],
      synchronize:true
    }),
    TypeOrmModule.forFeature([itemEntity])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
