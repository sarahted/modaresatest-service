import { Injectable } from '@nestjs/common';
import { StaffMember } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { StaffMemberData } from 'src/types/StaffMemberData.type';

@Injectable()
export class StaffMemberRepository {
  constructor(private readonly mainDataBase: PrismaService) {}

  async getBy(lastName: string, firstName: string): Promise<StaffMember> {
    return this.mainDataBase.staffMember.findFirst({
      where: { lastName, firstName },
    });
  }

  async getAllBy(ids: number[]): Promise<StaffMember[]> {
    return this.mainDataBase.staffMember.findMany({
      where: {
        id: { in: ids },
      },
    });
  }

  getAll(): Promise<StaffMember[]> {
    return this.mainDataBase.staffMember.findMany({});
  }

  create(data: Omit<StaffMemberData, 'id'>): Promise<StaffMember> {
    return this.mainDataBase.staffMember.create({
      data,
    });
  }

  async update(
    id: number,
    data: Omit<StaffMemberData, 'id'>,
  ): Promise<StaffMember> {
    return this.mainDataBase.staffMember.update({
      where: { id },
      data,
    });
  }
}
