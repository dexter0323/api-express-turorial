import { DataTypes, Model, Sequelize } from 'sequelize'
import SequelizeManager from '../db/sequelize.js'

export class TaskModel extends Model {
  public static setModel(sequelize: Sequelize) {
    sequelize.define(
      'tasks',
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
          type: DataTypes.ENUM('pending', 'complete'),
          allowNull: false,
          defaultValue: 'pending',
        },
      },
      {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      }
    )
  }
  public static async create(data: any): Promise<any> {
    try {
      return Promise.resolve(
        await SequelizeManager.sequalize.models.tasks.create(data)
      )
    } catch (error) {
      if (process.env.VERBOSE === 'true') console.error(error)
      return Promise.reject(error)
    }
  }

  public static async getById(id: number | string): Promise<any> {
    try {
      return Promise.resolve(
        await SequelizeManager.sequalize.models.tasks.findByPk(id)
      )
    } catch (error) {
      if (process.env.VERBOSE === 'true') console.error(error)
      return Promise.reject(error)
    }
  }

  public static async getAll(): Promise<any> {
    try {
      return Promise.resolve(
        await SequelizeManager.sequalize.models.tasks.findAll()
      )
    } catch (error) {
      if (process.env.VERBOSE === 'true') console.error(error)
      return Promise.reject(error)
    }
  }

  public static async update(data: any): Promise<any> {
    try {
      await SequelizeManager.sequalize.models.tasks.update(data, {
        where: { id: data.id },
      })
      return Promise.resolve(
        await SequelizeManager.sequalize.models.tasks.findByPk(data.id)
      )
    } catch (error) {
      if (process.env.VERBOSE === 'true') console.error(error)
      return Promise.reject(error)
    }
  }

  public static async delete(id: number | string): Promise<any> {
    try {
      return Promise.resolve(
        await SequelizeManager.sequalize.models.tasks.destroy({
          where: { id: id },
        })
      )
    } catch (error) {
      if (process.env.VERBOSE === 'true') console.error(error)
      return Promise.reject(error)
    }
  }
}
