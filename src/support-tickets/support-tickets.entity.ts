import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsPhoneNumber, Length } from 'class-validator';

@Entity()
export class SupportTicket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Length(1, 50)
  firstName: string;

  @Column()
  @Length(1, 50)
  lastName: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsPhoneNumber()
  phoneNumber: string;

  @Column()
  @Length(5, 1000)
  description: string;
}
