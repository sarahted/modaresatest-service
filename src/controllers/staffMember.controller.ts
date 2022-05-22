import { Body, Controller, Get, Post } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { StaffMemberService } from 'src/services/staffMember.service';
import { StaffMemberInputDto } from './dto/StaffMemberInput.dto';
import { StaffMemberOutputDto } from './dto/StaffMemberOutput.dto';

@Controller('staff-member')
export class StaffMemberController {
  constructor(private readonly staffMemberService: StaffMemberService) {}

  @Get('get-all')
  async getAll(): Promise<StaffMemberOutputDto[]> {
    const staffMembers = await this.staffMemberService.getAllStaffMembers();
    return plainToInstance(StaffMemberOutputDto, staffMembers);
  }

  @Post('create')
  async create(@Body() data: StaffMemberInputDto): Promise<void> {
    try {
      await this.staffMemberService.createStaffMember(data);
    } catch (error) {
      console.log('Error while creating staff member. Error: ', error);
      throw error;
    }
  }
}
