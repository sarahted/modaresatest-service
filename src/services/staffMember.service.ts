import { Injectable } from '@nestjs/common';
import { StaffMember } from '@prisma/client';
import { StaffMemberRepository } from 'src/repositories/staffMember.repository';
import { StaffMemberData } from 'src/types/StaffMemberData.type';

@Injectable()
export class StaffMemberService {
  constructor(private readonly staffMemberRepository: StaffMemberRepository) {}
  async getAllStaffMembers(): Promise<StaffMember[]> {
    return this.staffMemberRepository.getAll();
  }

  async createStaffMember(data: Omit<StaffMemberData, 'id'>): Promise<void> {
    await this.staffMemberRepository.create(data);
  }
}
