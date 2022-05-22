import { Injectable } from '@nestjs/common';
import { Appointment } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { AppointmentData } from 'src/types/AppointmentData.type';

@Injectable()
export class AppointmentRepository {
  constructor(private readonly mainDataBase: PrismaService) {}

  getBy(name: string): Promise<Appointment> {
    return this.mainDataBase.appointment.findFirst({
      where: { name },
    });
  }

  getAllBy(ids: number[]): Promise<Appointment[]> {
    return this.mainDataBase.appointment.findMany({
      where: {
        id: { in: ids },
      },
    });
  }

  getAll(): Promise<Appointment[]> {
    return this.mainDataBase.appointment.findMany({
      include: {
        client: true,
        staffMember: true,
      },
    });
  }

  create(data: Omit<AppointmentData, 'id'>): Promise<Appointment> {
    return this.mainDataBase.appointment.create({
      data: {
        endDate: data.endDate,
        startDate: data.startDate,
        name: data.name,
        client: { connect: { id: data.clientId } },
        staffMember: { connect: { id: data.staffMemberId } },
      },
    });
  }

  update(id: number, data: Omit<AppointmentData, 'id'>): Promise<Appointment> {
    return this.mainDataBase.appointment.update({
      where: { id },
      data,
    });
  }
}
