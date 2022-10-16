import { Sequelize } from "sequelize";
export default class SequelizeManager {
    static db;
    static async connect(uri) {
        try {
            this.db = new Sequelize(uri);
            if (process.env.VERBOSE === "true")
                console.info(`Sequelize connected!`);
            Promise.resolve(this.db);
        }
        catch (error) {
            if (process.env.VERBOSE === "true")
                console.error(error);
            Promise.reject(error);
        }
    }
}
//# sourceMappingURL=sequelize.js.map