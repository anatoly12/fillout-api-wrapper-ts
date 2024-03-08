import express, { Express } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import responseRoutes from './routes/responses';

const app: Express = express();
const PORT: string | number = process.env.PORT || 3000;

app.use(express.json());
app.use('/', responseRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
