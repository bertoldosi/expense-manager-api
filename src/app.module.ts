import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './resource/user/users.module';
import { ExpensesModule } from './resource/expense/expenses.module';

@Module({
  imports: [UsersModule, ExpensesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
