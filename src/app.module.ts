import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupportTicketsModule } from './support-tickets/support-tickets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './datasource';
import { HTTPLoggerMiddleware } from './httplogger.middleware';
import { EmailsModule } from './emails/emails.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: false,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      ...AppDataSource.options,
      synchronize: true,
    }),
    SupportTicketsModule,
    EmailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HTTPLoggerMiddleware).forRoutes('*');
  }
}
