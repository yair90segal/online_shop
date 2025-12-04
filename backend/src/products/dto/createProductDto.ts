import { Genre } from 'src/enums/genre.enum';

export class CreateProductDto {
  readonly author: string;
  readonly description: string;
  readonly productName: string;
  readonly genre: Genre;
  readonly price: number;
}
