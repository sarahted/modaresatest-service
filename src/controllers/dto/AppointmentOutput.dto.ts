import { Exclude } from 'class-transformer';
import { IsDate, IsInt, IsString } from 'class-validator';

export class AppointmentOutputDto {
  @IsInt()
  id: number;

  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;

  @IsString()
  name: string;

  @Exclude()
  clientId: number;

  @Exclude()
  staffMemberId: number;

  client: {
    id: number;
    name: string;
  };

  staffMember: {
    id: number;
    lastName: string;
    firstName: string;
  };
}
