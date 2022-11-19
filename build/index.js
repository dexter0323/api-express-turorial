import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import Mongo from './db/mongo.js';
import SequelizeManager from './db/sequelize.js';
import { routes } from './routes/index.js';
export async function init() {
    dotenv.config();
    const app = express();
    if (process.env.VERBOSE === 'true')
        console.info('Starting API...');
    if (process.env.CURRENT_DB === 'PG')
        await SequelizeManager.connect(process.env.PG_URI);
    if (process.env.CURRENT_DB === 'MONGO')
        for (const dbName of process.env.MONGODB_DEFAULT.split(',')) {
            await Mongo.connect(process.env.MONGODB_URI, dbName);
        }
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    app.use('/api', routes);
    app.listen(process.env.PORT || 3000, process.env.HOST || 'localhost', () => console.info(`API is running on ${process.env.HOST}:${process.env.PORT}!`));
}
//# sourceMappingURL=index.js.map