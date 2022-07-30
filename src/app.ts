import express from 'express';
import { Application } from 'express';
import * as bodyParser from 'body-parser';
import { MainRouter } from './routes';
import session from 'express-session';
import helmet from "helmet";
import compression from "compression";

const app: Application = express();

app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(session({
    secret: 'SESSION_SECRET',
    cookie: {
      maxAge: 60000
    },
    resave           : false,
    saveUninitialized: false
  }
));
app.use('/api', MainRouter);

export default app;
