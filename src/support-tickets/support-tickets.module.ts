import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailsModule } from 'src/emails/emails.module';
import { SupportTicketsController } from './support-tickets.controller';
import { SupportTicket } from './support-tickets.entity';
import { SupportTicketsService } from './support-tickets.service';

@Module({
  imports: [TypeOrmModule.forFeature([SupportTicket]), EmailsModule],
  controllers: [SupportTicketsController],
  providers: [SupportTicketsService],
})
export class SupportTicketsModule {}
