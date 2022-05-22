import { Body, Controller, Get, Post } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { ClientService } from 'src/services/client.service';
import { ClientInputDto } from './dto/ClientInput.dto';
import { ClientOutputDto } from './dto/ClientOutput.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get('get-all')
  async getAll(): Promise<ClientOutputDto[]> {
    const clients = await this.clientService.getAllClients();
    return plainToInstance(ClientOutputDto, clients);
  }

  @Post('create')
  async create(@Body() data: ClientInputDto): Promise<void> {
    try {
      await this.clientService.createClient(data);
    } catch (error) {
      console.log('Error while creating client. Error: ', error);
      throw error;
    }
  }
}
