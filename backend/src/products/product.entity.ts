import { Genre } from 'src/enums/genre.enum';
import { OrderEntity } from 'src/orders/order.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  productName: string;

  @Column()
  author: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: Genre,
  })
  genre: Genre;

  @Column()
  price: number;

  @Column()
  cloudinaryUrl: string;

  @ManyToMany(() => OrderEntity, (order) => order.products)
  orders: OrderEntity[];
}
