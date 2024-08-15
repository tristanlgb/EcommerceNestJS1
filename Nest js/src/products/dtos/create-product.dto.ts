import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  readonly quantity: number;
}




