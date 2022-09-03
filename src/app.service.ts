import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService{
  getName(): any {
    return {'name':'Zavier'}
  }
}