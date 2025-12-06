import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { ProductService } from 'src/products/product.service';
import { OrderStatus } from 'src/enums/orderStatus.enum';
import { OrderItemEntity } from './orderItem.entity';
// in orderModule, import userModule and productModule
@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
    private userService: UserService,
    private productService: ProductService,
  ) {}

  async getAllOrders() {
    const orders = await this.orderRepository.find({
      relations: {
        items: { product: true },
        user: false,
      },
      order: { orderDate: 'DESC' },
    });

    return orders.map((order) => ({
      id: order.id,
      orderDate: order.orderDate,
      status: order.status,
      totalPrice: order.totalPrice,
      items: order.items.map((item) => ({
        productName: item.product.productName,
        author: item.product.author,
        imageUrl: item.product.cloudinaryUrl,
        quantity: item.quantity,
      })),
    }));
  }

  async getOrdersByUserId(userId: number) {
    const orders = await this.orderRepository.find({
      where: { user: { id: userId } },
      relations: {
        items: { product: true },
      },
      order: { orderDate: 'DESC' },
    });

    return orders.map((order) => ({
      id: order.id,
      orderDate: order.orderDate,
      status: order.status,
      totalPrice: order.totalPrice,
      items: order.items.map((item) => ({
        productName: item.product.productName,
        author: item.product.author,
        imageUrl: item.product.cloudinaryUrl,
        quantity: item.quantity,
      })),
    }));
  }

  async createOrder(
    userId: number,
    items: { productId: string; quantity: number }[],
  ) {
    if (!items || items.length === 0) {
      throw new BadRequestException('Order must contain at least one item');
    }

    const user = await this.userService.findUserById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    const productIds = items.map((i) => i.productId);

    const products = await this.productService.getProductsByIds(productIds);

    const missing = productIds.filter(
      (id) => !products.some((p) => p.id === id),
    );

    if (missing.length > 0) {
      throw new Error(`Products not found: ${missing.join(', ')}`);
    }

    const totalPrice = items.reduce((sum, item) => {
      const product = products.find((p) => p.id === item.productId);

      if (!product) {
        throw new Error(`Product with id ${item.productId} not found`);
      }

      return sum + product.price * item.quantity;
    }, 0);

    const order = new OrderEntity();
    order.user = user;
    order.orderDate = new Date();
    order.totalPrice = Number(totalPrice);
    order.status = OrderStatus.PENDING;
    order.items = items.map((item) => {
      const orderItem = new OrderItemEntity();

      orderItem.orderId = order.id;
      orderItem.productId = item.productId;

      orderItem.quantity = item.quantity;

      const product = products.find((p) => p.id === item.productId);

      if (!product) {
        throw new Error(`Product with id ${item.productId} not found`);
      }
      orderItem.product = product;

      return orderItem;
    });

    const savedOrder = await this.orderRepository.save(order);

    return savedOrder;
  }
}
