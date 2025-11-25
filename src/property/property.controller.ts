import { Body, Controller, Get, Headers, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreatePropertyDto } from "./dto/createProperty.dto";
import { IdParamDto } from "./dto/idParam.dto";
import { ParseIdPipe } from "./pipes/parseIdPipe";
import { ZodValidationPipe } from "./pipes/zodValidationPipe";
import * as createPropertyZodDto from "./dto/createPropertyZod.dto";
import { HeadersDto } from "./dto/headers.dto";
import { RequestHeader } from "./pipes/request-header";
import { PropertyService } from "./property.service";

@Controller('property')
export class PropertyController {
      constructor(private propertyService: PropertyService){
            // Don't create your dependency, instead use DI in NestJs
            // this.propertyService = new PropertyService();
      }



      @Get()
      findAll() {
            // return "All Properties";
            return this.propertyService.findAll();
      }

      @Get(':id')
      findOne(@Param('id', ParseIntPipe) id: number, @Query("sort", ParseBoolPipe) sort: any) {
            console.log(typeof sort);
            // return id;
            return this.propertyService.findOne;
      }

      @Post()
      /* @UsePipes(new ValidationPipe({
            whitelist: true, // to remove the extra fields
            forbidNonWhitelisted: true, // throw error if get unknown properties
      })) */

      @UsePipes(new ZodValidationPipe(createPropertyZodDto.createPropertySchema))
      // @HttpCode(202)
      create(
            /* @Body(new ValidationPipe({
                  whitelist: true, // to remove the extra fields
                  forbidNonWhitelisted: true, // throw error if get unknown properties
                  groups: ["create"],
            })) body: CreatePropertyDto */

            @Body() body: createPropertyZodDto.CreatePropertyZodDto
      ) {
            console.log(body);

            // return body;
            return this.propertyService.create()
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
            ) body: CreatePropertyDto,
            // @Param() { id }: IdParamDto,
            @Param("id", ParseIdPipe) id:number,
            // @Headers("host") header:HeadersDto,
            @RequestHeader(HeadersDto) header:HeadersDto,
      ) {
            // return body;
            console.log("update");
            // return header;

            return this.propertyService.update()
      }
}