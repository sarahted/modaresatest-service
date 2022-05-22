import { IsInt, IsString } from 'class-validator';

export class ClientOutputDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;
}
