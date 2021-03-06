import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('API is running');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold
  );
});
