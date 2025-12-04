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

  @Column('numeric', {
    precision: 10,
    scale: 2,
    transformer: {
      to: (value: number) => value, // store as is (pg driver will convert)
      from: (value: string) => parseFloat(value), // DB -> JS: numeric comes as string
    },
  })
  price: number;

  @Column()
  cloudinaryUrl: string;

  @ManyToMany(() => OrderEntity, (order) => order.products)
  orders: OrderEntity[];
}
