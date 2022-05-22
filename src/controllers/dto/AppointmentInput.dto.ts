import { IsDate, IsInt, IsString } from 'class-validator';

export class AppointmentInputDto {
  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;

  @IsString()
  name: string;

  @IsInt()
  clientId: number;

  @IsInt()
  staffMemberId: number;
}
