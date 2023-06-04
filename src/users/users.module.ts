import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/database/prisma.service';
import { CustomEmailvalidation } from './validates/IsUserAlreadyExist';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, CustomEmailvalidation],
})
export class UsersModule {}
