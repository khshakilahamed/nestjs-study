import { IsInt, IsPositive, IsString, Length } from "class-validator";

export class CreatePropertyDto {
      @IsString(/* {always: true} */)
      @Length(2, 10, {
            message: "Error on length"
      })
      name: string;

      @IsString()
      @Length(2, 10, { groups: ['create'] })
      @Length(1, 5, { groups: ['update'] })
      description: string;

      @IsInt(/* {always: true} */)
      @IsPositive(/* {always: true} */)
      area: number;
}