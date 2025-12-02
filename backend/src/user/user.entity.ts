import { UserRole } from 'src/enums/role.enum';
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { OrderEntity } from 'src/orders/order.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Loval auth fields:
  @Column({ unique: true, nullable: true })
  username: string;

  @Column({ nullable: true })
  password: string;

  // Google auth fields:
  // googleId
  @Column({ unique: true, nullable: true })
  sub: string;

  @Column({ nullable: true })
  email: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.User,
  })
  role: UserRole;

  @OneToMany(() => OrderEntity, (order) => order.user)
  orders: OrderEntity[];

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
  }
}
