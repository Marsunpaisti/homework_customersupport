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
import { EmailsService } from 'src/emails/emails.service';

@Controller('support-tickets')
export class SupportTicketsController {
  constructor(
    private readonly supportTicketsService: SupportTicketsService,
    private readonly emailsService: EmailsService,
  ) {}

  @Get()
  getAllTickets() {
    return this.supportTicketsService.findAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.supportTicketsService.findById(id);
  }

  @Post()
  async addTicket(@Body() ticket: SupportTicket) {
    const addResult = await this.supportTicketsService.addOne(ticket);
    const addedTicket = await this.supportTicketsService.findById(addResult.id);
    this.emailsService.SendSupportTicketEmail(addedTicket);
    return addResult;
  }
}
