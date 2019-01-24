import * as winston from "winston";

const logger = winston.createLogger({
    format: winston.format.simple(),
    level: "info",
    transports: [new winston.transports.Console()],
});

logger.info("logger has been created...");

/*
import { ENVIRONMENT } from "./secrets";

const logger = winston.createLogger({
    format: winston.format.json(),
    level: 'info',
    transports: [
      //
      // - Write all logs with level `info` and below to `combined.log`
      // - Those with error and below to `error.log`.
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' })
    ]
});

// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest })`

if (ENVIRONMENT !== 'production') {
    return winston.createLogger({
      transports: [ new winston.transports.Console({ level: 'error'}) ]
    });
}

*/

export default logger;
