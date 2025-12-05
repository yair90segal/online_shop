import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async getAllUserOrders(userId: number) {
    return await this.orderService.getOrdersByUserId(userId);
  }

  @Post(':userId')
  async createOrder(
    @Param('userId') userId: number,
    @Body('items') items: { productId: string; quantity: number }[],
  ) {
    return await this.orderService.createOrder(userId, items);
  }
}
