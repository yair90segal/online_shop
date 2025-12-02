import { ProductEntity } from 'src/products/product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  orderId: number;

  @Column()
  orderDate: Date;

  @Column()
  totalPrice: number;

  @ManyToMany(() => ProductEntity, (product) => product.orders)
  products: ProductEntity[];
}
