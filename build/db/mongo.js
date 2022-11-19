import { connect } from 'mongoose';
export default class Mongo {
    static db = [];
    static async connect(mongoUri, dbName) {
        try {
            if (!Mongo.db[dbName]) {
                Mongo.db[dbName] = await connect(mongoUri + dbName);
                if (process.env.VERBOSE === 'true')
                    console.info(`Connected to mongodb ${dbName}`);
            }
            return Promise.resolve(Mongo.db[dbName]);
        }
        catch (error) {
            if (process.env.VERBOSE === 'true')
                console.error(error);
            return Promise.reject(error);
        }
    }
}
//# sourceMappingURL=mongo.js.map