import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Transaction } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionEntity } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(TransactionEntity) 
    private transactionRepository: Repository<TransactionEntity>) {}

  async create(TransactionEntity: TransactionEntity): Promise<TransactionEntity>{
    return await this.transactionRepository.save(TransactionEntity);
  }

  async findAll() : Promise<any[]> {
    return await this.transactionRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  async remove(id: number) {
    return await this.transactionRepository.delete(id);
  }
}
