import { MigrationInterface, QueryRunner } from 'typeorm';

export class createSupportTicketsTable1665828394337
  implements MigrationInterface
{
  name = 'createSupportTicketsTable1665828394337';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "support_ticket" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_506b4b9f579fb3adbaebe3950c2" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "support_ticket"`);
  }
}
