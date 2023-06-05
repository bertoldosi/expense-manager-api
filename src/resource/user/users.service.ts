import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        expenses: {
          create: createUserDto.expenses,
        },
      },
      include: {
        expenses: true,
      },
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(email: string) {
    const response = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    return response;
  }

  async remove(id: string) {
    await this.prisma.user.delete({
      where: {
        id,
      },
    });

    return;
  }
}
