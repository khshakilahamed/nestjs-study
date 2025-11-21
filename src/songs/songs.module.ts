import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { connection } from 'src/common/constants/connection';


const mockSongsService = {
  findAll(){
    return [{id: 1, title: "lasting lover", artists: ["Siagla", "Martin", "John"]}]
  }
}

@Module({
  controllers: [SongsController],
  providers: [
    // Standard provider
    SongsService,

    // class provider
    /* {
      provide: SongsService,
      useClass: SongsService,
    }, */

    // value provider
    // {
    //   provide: SongsService,
    //   useValue: mockSongsService,
    // },

    // Non class based providers
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ]
})
export class SongsModule {
}
