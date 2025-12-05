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
    return await this.orderRepository.find();
  }

  async getOrdersByUserId(userId: number) {
    return await this.orderRepository.find({ where: { user: { id: userId } } });
  }

  async createOrder(
    userId: number,
    items: { productId: string; quantity: number }[],
  ) {
    if (!items || items.length === 0) {
      throw new BadRequestException('Order must contain at least one item');
    }
    // 1. Load the user
    const user = await this.userService.findUserById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    // 2. Load all products in the request
    const productIds = items.map((i) => i.productId);

    const products = await this.productService.getProductsByIds(productIds);

    // safety check
    const missing = productIds.filter(
      (id) => !products.some((p) => p.id === id),
    );

    if (missing.length > 0) {
      throw new Error(`Products not found: ${missing.join(', ')}`);
    }

    // 3. Calculate total price
    const totalPrice = items.reduce((sum, item) => {
      const product = products.find((p) => p.id === item.productId);

      if (!product) {
        // Product missing — you can throw or just skip
        throw new Error(`Product with id ${item.productId} not found`);
      }

      return sum + product.price * item.quantity;
    }, 0);

    // 4. Create the OrderEntity
    const order = new OrderEntity();
    order.user = user;
    order.orderDate = new Date();
    order.totalPrice = totalPrice;
    order.status = OrderStatus.PENDING;

    // 5. Build the OrderItemEntity objects
    order.items = items.map((item) => {
      const orderItem = new OrderItemEntity();

      // composite primary keys
      orderItem.orderId = order.id; // will be filled after save
      orderItem.productId = item.productId;

      orderItem.quantity = item.quantity;

      // needed for TypeORM to resolve relation
      const product = products.find((p) => p.id === item.productId);

      if (!product) {
        // Product missing — you can throw or just skip
        throw new Error(`Product with id ${item.productId} not found`);
      }
      orderItem.product = product;

      return orderItem;
    });

    // 6. Save (cascade saves order_items automatically)
    const savedOrder = await this.orderRepository.save(order);

    return savedOrder;
  }
}
