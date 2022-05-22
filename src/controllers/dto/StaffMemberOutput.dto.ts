import { IsInt, IsString } from 'class-validator';

export class StaffMemberOutputDto {
  @IsInt()
  id: number;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}
