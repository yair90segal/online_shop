import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { OrderModule } from 'src/orders/order.module';
import { AdminController } from './admin.controller';
import { ProductModule } from 'src/products/product.module';

@Module({
  imports: [AuthModule, OrderModule, ProductModule],
  controllers: [AdminController],
})
export class AdminModule {}
