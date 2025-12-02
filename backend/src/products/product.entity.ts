import { OrderEntity } from 'src/orders/order.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  productName: string;

  @Column()
  description: string;

  @Column()
  cloudinaryUrl: string;

  @ManyToMany(() => OrderEntity, (order) => order.products)
  orders: OrderEntity[];
}
