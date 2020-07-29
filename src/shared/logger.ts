import * as winston from 'winston';

const options = {
  file: {
    level: 'info',
    filename: `./logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: true,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(options.console),
    new winston.transports.File(options.file),
  ],
  exitOnError: false,
});

export const loggRouter = (route: any) => {
  return winston.format.printf((info) => {
    return `${info.level.toUpperCase()} ${Date.now().toString()} >  ${route}.log | ${
      info.message
    }`;
  });
};
