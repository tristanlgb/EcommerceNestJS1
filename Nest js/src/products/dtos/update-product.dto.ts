import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  readonly price?: number;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  readonly quantity?: number;
}
