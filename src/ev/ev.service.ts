import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class EvService {
      constructor(private configureService: ConfigService){}

      getDBUrl(){
            return this.configureService.get<string>('DATABASE_URL')
      }
}
