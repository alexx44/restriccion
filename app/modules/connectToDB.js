import mongoose from '../utils/mongoosePromise';
import {db} from '../config/db.js';
mongoose.connect(db);

mongoose.connection.on('error', () => console.error(`Error connecting to: ${db}`));
mongoose.connection.once('open', () => console.log(`Connected to: ${db}`));

export default mongoose.connection;
