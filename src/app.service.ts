import { Injectable } from '@nestjs/common';
import showdown from 'showdown';
import axios from 'axios';

const converter = new showdown.Converter();

@Injectable()
export class AppService {
  retrieveAPost(): string {
    return 'Hello World!';
  }
  async getAnMDFile(): Promise<string> {
    return '';
  }

}
