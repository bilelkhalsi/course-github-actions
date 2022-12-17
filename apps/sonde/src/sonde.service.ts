import { Injectable } from '@nestjs/common';

@Injectable()
export class SondeService {
  getHello(): string {
    return 'Hello World!';
  }
}
