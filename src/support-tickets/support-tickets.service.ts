import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SupportTicket } from './support-tickets.entity';

@Injectable()
export class SupportTicketsService {
  constructor(
    @InjectRepository(SupportTicket)
    private readonly supportTicketRepository: Repository<SupportTicket>,
  ) {}

  public async findAll() {
    return this.supportTicketRepository.find();
  }
  public async findById(id: number) {
    const ticket: SupportTicket | null =
      await this.supportTicketRepository.findOneByOrFail({ id });

    return ticket;
  }

  public async addOne(ticket: SupportTicket) {
    return (await this.supportTicketRepository.insert(ticket)).identifiers?.[0];
  }
}
