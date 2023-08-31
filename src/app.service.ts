import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getPosts(noPosts: number): Promise<string> {
    return '';
  }

}
