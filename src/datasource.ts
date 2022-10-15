import { DataSource } from 'typeorm';
import { SupportTicket } from './support-tickets/support-tickets.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'testuser',
  password: 'testpassword',
  database: 'backend-db',
  entities: [SupportTicket],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
