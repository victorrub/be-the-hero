import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateIncidents1597169155437 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "incidents",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "title",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "description",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "value",
            type: "double",
            isNullable: false,
          },
          {
            name: "ong_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "incidents",
      new TableForeignKey({
        columnNames: ["ong_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "ongs",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("incidents");

    if (table) {
      const foreignKey = table.foreignKeys.find(
        (fk) => fk.columnNames.indexOf("ong_id") !== -1
      );

      if (foreignKey) await queryRunner.dropForeignKey("incidents", foreignKey);
    }

    await queryRunner.dropTable("incidents");
  }
}
