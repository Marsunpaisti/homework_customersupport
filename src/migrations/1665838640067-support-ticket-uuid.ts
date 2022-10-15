import { MigrationInterface, QueryRunner } from 'typeorm';

export class supportTicketUuid1665838640067 implements MigrationInterface {
  name = 'supportTicketUuid1665838640067';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "support_ticket" DROP CONSTRAINT "PK_506b4b9f579fb3adbaebe3950c2"`,
    );
    await queryRunner.query(`ALTER TABLE "support_ticket" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "support_ticket" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "support_ticket" ADD CONSTRAINT "PK_506b4b9f579fb3adbaebe3950c2" PRIMARY KEY ("id")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "support_ticket" DROP CONSTRAINT "PK_506b4b9f579fb3adbaebe3950c2"`,
    );
    await queryRunner.query(`ALTER TABLE "support_ticket" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "support_ticket" ADD "id" SERIAL NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "support_ticket" ADD CONSTRAINT "PK_506b4b9f579fb3adbaebe3950c2" PRIMARY KEY ("id")`,
    );
  }
}
