import { OrderEntity } from 'src/orders/order.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  productCode: number;

  @Column()
  productName: string;

  @Column()
  description: string;

  @Column()
  s3Url: string;

  @ManyToMany(() => OrderEntity, (order) => order.products)
  orders: OrderEntity[];
}
