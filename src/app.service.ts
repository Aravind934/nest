import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { itemEntity } from './database/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(itemEntity)
    private itemRepository:Repository<itemEntity>
    ){}
  getAllItems(): Promise<itemEntity[]> {
    return this.itemRepository.find();
  }
  getItem(id:number):Promise<itemEntity>{
    return this.itemRepository.findOne(id)
  }
  postItem(data:itemEntity):Promise<itemEntity>{
     return this.itemRepository.save(data)
  }
  async deleteItem(id:number):Promise<void>{
    await this.itemRepository.delete(id)
  }
  async updateItem(data:itemEntity){

return this.itemRepository.update(data.id,data)
  }
}
