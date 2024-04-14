//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SpareParts')
export class SparePartsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  name: string;

  @Column('real', { nullable: true })
  price: number;

  @Column('text', { nullable: true })
  compatibility: string;

  @Column('integer', { nullable: true })
  stockQuantity: number;
}