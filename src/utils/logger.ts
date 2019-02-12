import * as winston from "winston";

const logger = winston.createLogger({
    format: winston.format.simple(),
    level: "info",
    transports: [new winston.transports.Console()],
});

logger.info("logger has been created...");

export default logger;
