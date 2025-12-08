import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { UserRole } from 'src/enums/role.enum';
import { OrderService } from 'src/orders/order.service';
import { CreateProductDto } from 'src/products/dto/createProductDto';
import { ProductService } from 'src/products/product.service';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('admin')
@Roles(UserRole.Admin)
export class AdminController {
  constructor(
    private readonly orderService: OrderService,
    private readonly productService: ProductService,
  ) {}

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

  @Post('products')
  @UseInterceptors(FileInterceptor('image'))
  async createProduct(
    @Body() dto: CreateProductDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log('in create product controller method');
    return await this.productService.createProduct(dto, file);
  }

  @Delete('products/:id')
  async deleteProduct(@Param('id') id: string) {
    return await this.productService.removeProduct(id);
  }
}
