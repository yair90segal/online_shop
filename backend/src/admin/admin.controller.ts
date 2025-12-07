import { Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { OrderService } from 'src/orders/order.service';

@UseGuards(JwtAuthGuard)
@Controller('admin')
export class AdminController {
  constructor(private readonly orderService: OrderService) {}

  @Get('orders')
  async getAllOrders() {
    return await this.orderService.getAllOrders();
  }

  @Patch('orders/:orderId/:newStatus')
  async updateOrderStatus(
    @Param('orderId') orderId: string,
    @Param('newStatus') newStatus: string,
  ) {
    return await this.orderService.updateOrderStatus(orderId, newStatus);
  }
}
