import { Entity, ManyToOne, PrimaryColumn, Column } from 'typeorm';
import { OrderEntity } from 'src/orders/order.entity';
import { ProductEntity } from 'src/products/product.entity';

@Entity('order_items')
export class OrderItemEntity {
  @PrimaryColumn()
  orderId: string;

  @PrimaryColumn()
  productId: string;

  @ManyToOne(() => OrderEntity, (order) => order.items)
  order: OrderEntity;

  @ManyToOne(() => ProductEntity, (product) => product.orderItems)
  product: ProductEntity;

  @Column()
  quantity: number;
}
