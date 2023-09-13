import dotenv from 'dotenv';
import express from 'express';
import { router } from './routes.js';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/api/star', router);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}/`);
});