import { BadRequestException, createParamDecorator, ExecutionContext } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate, validateOrReject } from "class-validator";

export const RequestHeader = createParamDecorator(
      async (targetDto: any, ctx: ExecutionContext) => {
            const headers = ctx.switchToHttp().getRequest().headers;
            const dto = plainToInstance(targetDto, headers, {
                  excludeExtraneousValues: true,
            });
            /* await validateOrReject(dto);
 
            return dto; */

            const errors = await validate(dto,);

            if (errors.length > 0) {
                  // throw new BadRequestException(errors);
                  // format like class-validator ValidationPipe
                  const messages = errors.flatMap(error =>
                        Object.values(error.constraints ?? {})
                  );

                  throw new BadRequestException(messages);
            }

            // REMOVE conflicting keys from raw headers
            delete headers['access-token'];
            delete headers['accessToken'];

            return {
                  ...headers,
                  ...dto,
            };
      },
);