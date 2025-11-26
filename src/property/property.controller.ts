import { Body, Controller, DefaultValuePipe, Delete, Get, Headers, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreatePropertyDto } from "./dto/createProperty.dto";
import { IdParamDto } from "./dto/idParam.dto";
import { ParseIdPipe } from "./pipes/parseIdPipe";
import { ZodValidationPipe } from "./pipes/zodValidationPipe";
import * as createPropertyZodDto from "./dto/createPropertyZod.dto";
import { HeadersDto } from "./dto/headers.dto";
import { RequestHeader } from "./pipes/request-header";
import { PropertyService } from "./property.service";
import { UpdatePropertyDto } from "./dto/updateProperty.dito";
import { PaginationDTO } from "./dto/pagination.dto";

@Controller('property')
export class PropertyController {
      constructor(private propertyService: PropertyService) {
            // Don't create your dependency, instead use DI in NestJs
            // this.propertyService = new PropertyService();
      }



      @Get()
      findAll(@Query() paginationDTO: PaginationDTO) {
            // return "All Properties";
            return this.propertyService.findAll(paginationDTO);
      }

      @Get(':id')
      findOne(
            @Param('id', ParseIntPipe) id: number,
            // @Query("sort", ParseBoolPipe) sort: any,
            @Query('sort', new DefaultValuePipe(false), ParseBoolPipe) sort: boolean,
      ) {
            console.log(typeof sort);
            // return id;
            // return this.propertyService.findOne;
            return this.propertyService.findOne(id);
      }

      @Post()
      /* @UsePipes(new ValidationPipe({
            whitelist: true, // to remove the extra fields
            forbidNonWhitelisted: true, // throw error if get unknown properties
      })) */

      // @UsePipes(new ZodValidationPipe(createPropertyZodDto.createPropertySchema))
      // @HttpCode(202)
      create(
            /* @Body(new ValidationPipe({
                  whitelist: true, // to remove the extra fields
                  forbidNonWhitelisted: true, // throw error if get unknown properties
                  groups: ["create"],
            })) body: CreatePropertyDto */

            // @Body() body: createPropertyZodDto.CreatePropertyZodDto
            @Body() body: CreatePropertyDto
      ) {
            console.log(body);

            // return body;
            return this.propertyService.create(body)
      }

      @Patch(":id")
      update(
            @Body(
                  /* new ValidationPipe({
                        whitelist: true, // to remove the extra fields
                        forbidNonWhitelisted: true, // throw error if get unknown properties
                        groups: ["update"],
                        always: true, // can accept validation for all properties
                  }) */
            ) body: UpdatePropertyDto,
            // @Param() { id }: IdParamDto,
            @Param("id", ParseIdPipe) id: number,
            // @Headers("host") header:HeadersDto,
            @RequestHeader(HeadersDto) header: HeadersDto,
      ) {
            // return body;
            console.log("update");
            // return header;
            return this.propertyService.update(id, body)
      }

      @Delete(":id")
      delete(@Param("id", ParseIdPipe) id: number) {
            return this.propertyService.delete(id);
      }
}