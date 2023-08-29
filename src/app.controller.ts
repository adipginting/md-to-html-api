import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  retrieveAPost(): string {
    return this.appService.retrieveAPost();
  }
}
