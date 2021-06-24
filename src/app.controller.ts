import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { itemEntity } from './database/item.entity';
import { itemDto } from './dtos/item.dto';

@Controller('items')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getAllItems')
  getAll(): Promise<itemEntity[]> {
    return this.appService.getAllItems();
  }

  @Get('/getItem/:id')
  getItem(@Param('id') id):Promise<itemEntity>{
    return this.appService.getItem(Number(id))
  }

  @Post('postItem')
  postItem(@Body()body:itemDto):Promise<itemEntity>{
    return this.appService.postItem(body)
  }

  @Delete('/deleteItem/:id')
   async deleteItem(@Param('id') id){
    await this.appService.deleteItem(Number(id))
    return {message:'deleted'}
  }

  @Put('updateItem/:id')
  async updateItem(@Body() body:itemDto):Promise<itemEntity>{
    return this.appService.updateItem(body)
  }
}
