import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { OrderService } from './order.service';
import { UserRole } from 'src/enums/role.enum';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async getAllUserOrders(userId: number) {
    return await this.orderService.getOrdersByUserId(userId);
  }

  @Post()
  async createOrder(
    @Body('items') items: { productId: string; quantity: number }[],
    @Req() req: Request & { user: { sub: number; role: UserRole } },
  ) {
    const userId = req.user.sub;
    return await this.orderService.createOrder(userId, items);
  }
}
