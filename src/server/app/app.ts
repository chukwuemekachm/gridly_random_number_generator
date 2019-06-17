import 'dotenv/config';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import router from './app.router';

const app = express();

// Body parser and helmet middleware
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api/v1', router);
app.use('/', express.static(path.join(process.cwd(), 'dist')));


// Error Handler
app.use((error, req, resp, next) => {
  return resp.status(500).json({
    message: 'Internal Server error',
  });
});

export default app;
