import { OrderStatus } from 'src/enums/orderStatus.enum';
import { UserEntity } from 'src/user/user.entity';
import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderItemEntity } from './orderItem.entity';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  orderDate: Date;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.PENDING,
  })
  status: OrderStatus;

  @Column()
  totalPrice: number;

  @OneToMany(() => OrderItemEntity, (item) => item.order, { cascade: true })
  items: OrderItemEntity[];

  @ManyToOne(() => UserEntity, (user) => user.orders)
  user: UserEntity;
}
