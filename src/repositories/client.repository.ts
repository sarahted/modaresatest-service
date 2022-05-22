import { Injectable } from '@nestjs/common';
import { Client } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { ClientData } from 'src/types/ClientData.type';

@Injectable()
export class ClientRepository {
  constructor(private readonly mainDataBase: PrismaService) {}

  getBy(name: string): Promise<Client> {
    return this.mainDataBase.client.findFirst({
      where: { name },
    });
  }

  getAllBy(ids: number[]): Promise<Client[]> {
    return this.mainDataBase.client.findMany({
      where: {
        id: { in: ids },
      },
    });
  }

  getAll(): Promise<Client[]> {
    return this.mainDataBase.client.findMany({});
  }

  create(data: Omit<ClientData, 'id'>): Promise<Client> {
    return this.mainDataBase.client.create({
      data,
    });
  }

  update(id: number, data: Omit<ClientData, 'id'>): Promise<Client> {
    return this.mainDataBase.client.update({
      where: { id },
      data,
    });
  }
}
