import { DataTypes, Model } from "sequelize";
export class TaskModel extends Model {
    static setModel(sequelize) {
        sequelize.define("tasks", {
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
        }, {
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
        });
    }
}
//# sourceMappingURL=task.sequilize.js.map