import { Injectable } from '@nestjs/common';
import { ClientRepository } from 'src/repositories/client.repository';
import { ClientData } from 'src/types/ClientData.type';

@Injectable()
export class ClientService {
  constructor(private readonly clientRepository: ClientRepository) {}

  async getAllClients(): Promise<ClientData[]> {
    return this.clientRepository.getAll();
  }

  async createClient(data: Omit<ClientData, 'id'>): Promise<void> {
    await this.clientRepository.create(data);
  }
}
