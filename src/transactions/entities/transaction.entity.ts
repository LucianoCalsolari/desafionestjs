import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity()
  export class TransactionEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    account_id: number;

    @Column()
    amount: number;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }