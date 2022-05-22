import { Injectable } from '@nestjs/common';
import { AppointmentRepository } from 'src/repositories/appointment.repository';
import { AppointmentData } from 'src/types/AppointmentData.type';

@Injectable()
export class AppointmentService {
  constructor(private readonly appointmentRepository: AppointmentRepository) {}

  async getAllAppointments(): Promise<AppointmentData[]> {
    return this.appointmentRepository.getAll();
  }

  async createAppointment(data: Omit<AppointmentData, 'id'>): Promise<number> {
    const appointment = await this.appointmentRepository.create(data);
    return appointment.id;
  }
}
