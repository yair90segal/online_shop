import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
