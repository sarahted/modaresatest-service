import { IsString } from 'class-validator';

export class StaffMemberInputDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}
