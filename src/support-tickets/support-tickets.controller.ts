import { Controller, Get, Post, Body } from '@nestjs/common';
import { SupportTicket } from './support-tickets.entity';
import { SupportTicketsService } from './support-tickets.service';

@Controller('support-tickets')
export class SupportTicketsController {
  constructor(private readonly supportTicketsService: SupportTicketsService) {}
  @Get()
  getAllTickets() {
    return this.supportTicketsService.findAll();
  }

  @Post()
  addTicket(@Body() ticket: SupportTicket) {
    return this.supportTicketsService.addOne(ticket);
  }
}
