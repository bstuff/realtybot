import winston from 'winston';
import { logger } from './logger';

logger
  .add(
    new winston.transports.Console({
      level: 'debug',
    }),
  );

export const childLogger = logger.child.bind(logger);
