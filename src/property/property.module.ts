import { Module, ValidationPipe } from "@nestjs/common";
import { PropertyController } from "./property.controller";
import { APP_PIPE } from "@nestjs/core";

@Module({
      controllers: [PropertyController],
      providers: [
            {
                  provide: APP_PIPE,
                  // useClass: ValidationPipe, // if don't need any options, then we can use useClass,
                  useValue: new ValidationPipe({
                        whitelist: true,
                        forbidNonWhitelisted: true,
                        transform: true,
                        transformOptions: {
                              enableImplicitConversion: true,
                        },
                  })
            }
      ],
})
export class PropertyModule { }