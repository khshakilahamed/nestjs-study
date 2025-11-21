import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, Put, Scope } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import type { Connection } from 'src/common/constants/connection';

// @Controller('songs')
@Controller({
      path: 'songs',
      scope: Scope.REQUEST
})
export class SongsController {
      constructor(
            private songsService: SongsService, 
            @Inject('CONNECTION') 
            private connection: Connection,
      ) {
            console.log(`THIS IS CONNECTION STRING ${this.connection.CONNECTION_STRING}`);
       }

      @Post()
      create(@Body() createSongDTO: CreateSongDTO) {
            return this.songsService.create(createSongDTO)
      }

      @Get()
      findAll() {
            try {
                  return this.songsService.findAll();
            } catch (error) {
                  console.log("I am in the catch block: ", error);
                  throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR, {
                        cause: error
                  })
            }
      }

      @Get(':id')
      findOne(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number) {
            return `fetch song on the based on id ${typeof id}`
      }

      @Put(':id')
      update() {
            return 'update song on the based on id'
      }

      @Delete(':id')
      delete() {
            return 'Delete song on the based on id'
      }
}
