import { Controller, Get, UseGuards } from '@nestjs/common';
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
}
