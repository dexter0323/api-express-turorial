import { DataTypes, Model, Sequelize } from "sequelize"

export class TaskModel extends Model {
  public static setModel(sequelize: Sequelize) {
    sequelize.define(
      "tasks",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM("pending", "complete"),
          allowNull: false,
          defaultValue: "pending",
        },
      },
      {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    )
  }
}
