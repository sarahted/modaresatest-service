import { IsString } from 'class-validator';

export class ClientInputDto {
  @IsString()
  name: string;
}
