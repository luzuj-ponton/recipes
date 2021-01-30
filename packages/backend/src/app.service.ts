import { Injectable } from '@nestjs/common';

import { Test } from '../../shared/enums/test.enum';

@Injectable()
export class AppService {
  cos = ''
  getHello(): string {
    return `${Test.Siema} elo`;
  }

  getSiema(): string {
    return 'eluwa';
  }
}
