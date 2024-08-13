import bodyParser from 'body-parser';
import express from 'express';

import eventRoutes from './routes/events.js';

const app = express();

console.log('Anythings');

app.use(bodyParser.json());

app.use(eventRoutes);

app.listen(process.env.PORT);
