import { Module } from '@nestjs/common';
import { AppointmentController } from './controllers/appointment.controller';
import { ClientController } from './controllers/client.controller';
import { StaffMemberController } from './controllers/staffMember.controller';
import { PrismaService } from './prisma.service';
import { AppointmentRepository } from './repositories/appointment.repository';
import { ClientRepository } from './repositories/client.repository';
import { StaffMemberRepository } from './repositories/staffMember.repository';
import { AppointmentService } from './services/appointment.service';
import { ClientService } from './services/client.service';
import { StaffMemberService } from './services/staffMember.service';

@Module({
  imports: [],
  controllers: [ClientController, AppointmentController, StaffMemberController],
  providers: [
    ClientService,
    AppointmentService,
    StaffMemberService,
    PrismaService,
    AppointmentRepository,
    ClientRepository,
    StaffMemberRepository,
  ],
  exports: [AppModule],
})
export class AppModule {}
