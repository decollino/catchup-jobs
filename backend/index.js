import express from 'express';
import cors from 'cors';
import winston from 'winston';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';
import profileRouter from './routes/profileRouter.js';
import languageRouter from './routes/languageRouter.js';
import titleRouter from './routes/titleRouter.js';
import companyRouter from './routes/companyRouter.js';
import skillRouter from './routes/skillRouter.js';
import careerRouter from './routes/careerRouter.js';
import userJobRouter from './routes/userJobRouter.js';
import userCareerRouter from './routes/userCareerRouter.js';
import userLanguageRouter from './routes/userLanguageRouter.js';
import userSkillRouter from './routes/userSkillRouter.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './doc.js';

// API Log
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
global.logger = winston.createLogger({
  level: 'silly',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'catchup-api.log' }),
  ],
  format: combine(label({ label: 'catchup-api' }), timestamp(), myFormat),
});

// Envi file - variable configuration
dotenv.config();

//
// API start
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/users', userRouter);
app.use('/api/profiles', profileRouter);
app.use('/api/languages', languageRouter);
app.use('/api/titles', titleRouter);
app.use('/api/companies', companyRouter);
app.use('/api/skills', skillRouter);
app.use('/api/careers', careerRouter);
app.use('/api/userJobs', userJobRouter);
app.use('/api/userCareers', userCareerRouter);
app.use('/api/userLanguages', userLanguageRouter);
app.use('/api/userSkills', userSkillRouter);
app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
