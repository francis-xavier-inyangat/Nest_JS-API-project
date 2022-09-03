import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly something: AppService) {}

  @Get()

  getName(): string {
    return this.something.getName();
  }
}
