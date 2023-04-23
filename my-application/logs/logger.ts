import winston from 'winston';
import { ConsoleTransportOptions } from 'winston/lib/winston/transports';

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf(({ level, message, timestamp }) => {
          return `[${timestamp}] ${level}: ${message}`;
        }),
      ),
    } as ConsoleTransportOptions),
  ],
});

export default logger;
