import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppointmentService } from 'src/services/appointment.service';
import { AppointmentInputDto } from './dto/AppointmentInput.dto';
import { AppointmentOutputDto } from './dto/AppointmentOutput.dto';
import { plainToInstance } from 'class-transformer';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get('get-all')
  async getAll(): Promise<AppointmentOutputDto[]> {
    const appointments = await this.appointmentService.getAllAppointments();
    return plainToInstance(AppointmentOutputDto, appointments);
  }

  @Post('create')
  async create(@Body() data: AppointmentInputDto): Promise<number> {
    try {
      return this.appointmentService.createAppointment(data);
    } catch (error) {
      console.log('Error while creating appointment. Error: ', error);
      throw error;
    }
  }
}
