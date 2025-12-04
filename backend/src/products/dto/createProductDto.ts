/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Type } from 'class-transformer';
import { IsEnum, IsNumber } from 'class-validator';
import { Genre } from 'src/enums/genre.enum';

export class CreateProductDto {
  readonly author: string;

  readonly description: string;

  readonly productName: string;

  @IsEnum(Genre)
  readonly genre: Genre;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  readonly price: number;
}
