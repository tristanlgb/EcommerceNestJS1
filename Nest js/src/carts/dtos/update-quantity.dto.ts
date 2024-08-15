import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateQuantityDto {
  @IsString()
  @IsNotEmpty()
  readonly productId: string;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  readonly quantity: number;
}


