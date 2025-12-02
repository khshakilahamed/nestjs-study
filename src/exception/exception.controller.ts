import { BadRequestException, Controller, Get, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/http-exception/http-exception.filter';

@Controller('exception')
@UseFilters(HttpExceptionFilter)
export class ExceptionController {
      @Get('/hello/:id')
      getHello(@Param('id', ParseIntPipe) id: number) {

            /* if(id === 1){
                  throw new BadRequestException("One is not valid id.")
            } */
            return { Message: `Your Id Is: ${id}` };
      }
}
