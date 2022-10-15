import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SupportTicket } from 'src/support-tickets/support-tickets.entity';

@Injectable()
export class EmailsService {
  constructor(private mailerService: MailerService) {}

  async SendSupportTicketEmail(ticket: SupportTicket) {
    await this.mailerService.sendMail({
      to: ticket.email,
      subject: `New support ticket (#${ticket.id}) from ${ticket.firstName} ${ticket.lastName}`,
      template: 'supportticket',
      context: {
        ...ticket,
      },
    });
  }
}
