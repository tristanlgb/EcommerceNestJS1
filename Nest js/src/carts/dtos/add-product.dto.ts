import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class AddProductDto {
  @IsString()
  @IsNotEmpty()
  readonly productId: string;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  readonly quantity: number;
}
