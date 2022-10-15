import { Injectable, Logger } from '@nestjs/common';
import { MailerService, ISendMailOptions } from '@nestjs-modules/mailer';
import { SupportTicket } from 'src/support-tickets/support-tickets.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailsService {
  private logger = new Logger(EmailsService.name);
  constructor(
    private mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  async SendSupportTicketEmail(ticket: SupportTicket) {
    const options: ISendMailOptions = {
      to: ticket.email,
      subject: `New support ticket (#${ticket.id}) from ${ticket.firstName} ${ticket.lastName}`,
      template: 'supportticket',
      context: {
        ...ticket,
      },
    };

    if (this.configService.get('ENABLE_EMAILS') !== 'true') {
      this.logger.log('ENABLE_EMAILS is not true, skipping email');
      this.logger.log(
        'Email options would have been: ',
        JSON.stringify(options, undefined, 2),
      );
      return;
    }

    this.logger.log(`Sending Support ticket notification to ${ticket.email}`);
    await this.mailerService.sendMail(options);
  }
}
