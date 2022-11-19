import { Sequelize } from 'sequelize';
import { TaskModel } from '../models/task.sequilize.js';
export default class SequelizeManager {
    static sequalize;
    static async connect(uri) {
        try {
            SequelizeManager.sequalize = new Sequelize(uri, {
                dialect: 'postgres',
                schema: 'tasks_schema',
                logging(msg) {
                    if (process.env.VERBOSE === 'true')
                        console.info(msg);
                },
            });
            if (process.env.VERBOSE === 'true')
                console.info(`Sequelize connected!`);
            SequelizeManager.setModels();
            if (process.env.DB_SYNC === 'true')
                await SequelizeManager.sequalize.sync();
            return Promise.resolve();
        }
        catch (error) {
            if (process.env.VERBOSE === 'true')
                console.error(error);
            return Promise.reject(error);
        }
    }
    static setModels() {
        TaskModel.setModel(SequelizeManager.sequalize);
    }
}
//# sourceMappingURL=sequelize.js.map