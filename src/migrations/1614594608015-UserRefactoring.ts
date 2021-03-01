import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UserRefactoring1614594608015 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                },
                {
                    name: "fullname",
                    type: "varchar",
                },
                {
                    name: "password",
                    type: "varchar",
                },
                {
                    name: "createAt",
                    type: "timestamp",
                    default: 'now()'
                },
                {
                    name: "updateAt",
                    type: "timestamp",
                    default: 'now()'
                }
            ]
        }), true)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("user");
        await queryRunner.dropTable(table);
    }

}
