import { DataTypes, Model } from 'sequelize';
import SequelizeManager from '../db/sequelize.js';
export class TaskModel extends Model {
    static setModel(sequelize) {
        sequelize.define('tasks', {
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
                type: DataTypes.ENUM('pending', 'complete'),
                allowNull: false,
                defaultValue: 'pending',
            },
        }, {
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        });
    }
    static async create(data) {
        try {
            return Promise.resolve(await SequelizeManager.sequalize.models.tasks.create(data));
        }
        catch (error) {
            if (process.env.VERBOSE === 'true')
                console.error(error);
            return Promise.reject(error);
        }
    }
    static async getById(id) {
        try {
            return Promise.resolve(await SequelizeManager.sequalize.models.tasks.findByPk(id));
        }
        catch (error) {
            if (process.env.VERBOSE === 'true')
                console.error(error);
            return Promise.reject(error);
        }
    }
    static async getAll() {
        try {
            return Promise.resolve(await SequelizeManager.sequalize.models.tasks.findAll());
        }
        catch (error) {
            if (process.env.VERBOSE === 'true')
                console.error(error);
            return Promise.reject(error);
        }
    }
    static async update(data) {
        try {
            await SequelizeManager.sequalize.models.tasks.update(data, {
                where: { id: data.id },
            });
            return Promise.resolve(await SequelizeManager.sequalize.models.tasks.findByPk(data.id));
        }
        catch (error) {
            if (process.env.VERBOSE === 'true')
                console.error(error);
            return Promise.reject(error);
        }
    }
    static async delete(id) {
        try {
            return Promise.resolve(await SequelizeManager.sequalize.models.tasks.destroy({
                where: { id: id },
            }));
        }
        catch (error) {
            if (process.env.VERBOSE === 'true')
                console.error(error);
            return Promise.reject(error);
        }
    }
}
//# sourceMappingURL=task.sequilize.js.map