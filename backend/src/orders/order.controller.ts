import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { OrderService } from './order.service';
import { UserRole } from 'src/enums/role.enum';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('test')
  testRoute(@Req() req) {
    console.log('### TEST ROUTE HIT');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log('### REQ HEADERS:', req.headers);
    return { ok: true };
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllUserOrders(
    @Req() req: Request & { user: { sub: number; role: UserRole } },
  ) {
    const userId = req.user.sub;
    return await this.orderService.getOrdersByUserId(userId);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createOrder(
    @Body('items') items: { productId: string; quantity: number }[],
    @Req() req: Request & { user: { sub: number; role: UserRole } },
  ) {
    console.log('Received headers:', req.headers);
    console.log('Authorization header:', req.headers['authorization']);
    const userId = req.user.sub;
    return await this.orderService.createOrder(userId, items);
  }
}
