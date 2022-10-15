import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { SupportTicket } from './support-tickets.entity';
import { SupportTicketsService } from './support-tickets.service';

@Controller('support-tickets')
export class SupportTicketsController {
  constructor(private readonly supportTicketsService: SupportTicketsService) {}
  @Get()
  getAllTickets() {
    return this.supportTicketsService.findAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.supportTicketsService.findById(id);
  }

  @Post()
  addTicket(@Body() ticket: SupportTicket) {
    return this.supportTicketsService.addOne(ticket);
  }
}
