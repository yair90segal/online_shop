import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
  ) {}

  async getAllOrders() {
    return await this.orderRepository.find();
  }

  async getOrdersByUserId(userId: number) {
    return await this.orderRepository.find({ where: { user: { id: userId } } });
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async placeOrder(userId: number, productIds: string[]) {
    console.log(userId);
    console.log(productIds);
  }
}
