import express from 'express';
import cors from 'cors';
import { createRoutes } from './routes';

const ailientendpoint = 'https://api.aylien.com/news';
console.log(process.env.API_ID);

const PORT = 3000;

// initializes express
const app = express();

// MIDDLEWARE
// cross-origin enable
app.use(cors());

// serves webapp
app.use(express.static('dist'));
createRoutes(app);

// starts server
app.listen(PORT, () =>
{
    console.info(`Server listening at http://localhost:${PORT}`);
});
