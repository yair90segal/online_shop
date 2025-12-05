import { Genre } from 'src/enums/genre.enum';
import { OrderItemEntity } from 'src/orders/orderItem.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(() => OrderItemEntity, (item) => item.product)
  orderItems: OrderItemEntity[];
}
