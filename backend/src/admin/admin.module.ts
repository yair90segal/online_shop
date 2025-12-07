import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { OrderModule } from 'src/orders/order.module';
import { AdminController } from './admin.controller';

@Module({
  imports: [AuthModule, OrderModule],
  controllers: [AdminController],
})
export class AdminModule {}
