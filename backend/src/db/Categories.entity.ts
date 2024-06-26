//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Categories')
export class CategoriesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  categoryName: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('integer', { nullable: true })
  stockQuantity: number;
}
