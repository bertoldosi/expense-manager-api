import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './resource/user/users.module';
import { ExpensesModule } from './resource/expense/expenses.module';
import { ShoppingModule } from './resource/shopping/shopping.module';
import { InstitutionModule } from './resource/institution/institution.module';

@Module({
  imports: [UsersModule, ExpensesModule, ShoppingModule, InstitutionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
