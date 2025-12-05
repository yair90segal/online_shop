import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { UserModule } from 'src/user/user.module';
import { ProductModule } from 'src/products/product.module';
import { OrderItemEntity } from './orderItem.entity';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity, OrderItemEntity]),
    UserModule,
    ProductModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
