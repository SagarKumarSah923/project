import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import contactRouter from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT ?? 4000);

// trust proxy for correct client IP when behind reverse proxy
app.set('trust proxy', 1);

app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : true,
  })
);
app.use(express.json({ limit: '10kb' })); // small body limit for contact form

const limiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS ?? 60_000),
  max: Number(process.env.RATE_LIMIT_MAX ?? 6),
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', limiter);

// mount routes
app.use('/api/contact', contactRouter);

app.get('/', (_req: Request, res: Response) => res.json({ ok: true, msg: 'Server running' }));

// global error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

async function start() {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error('MONGO_URI not set in environment');

    await mongoose.connect(uri, {
      // cast to any to avoid TS mismatch in older/newer mongoose typings
      ...(mongoose as any).set ? {} : {},
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);

    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

start();

// graceful shutdown
process.on('SIGINT', async () => {
  console.log('SIGINT received, closing...');
  try {
    await mongoose.disconnect();
  } catch (e) {
    /* ignore */
  }
  process.exit(0);
});