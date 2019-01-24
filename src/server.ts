import app from "./app";
import logger from "./utils/logger";

logger.info("Hello from concordapi server"); // micktemp

const server = app.listen(app.get("port"), () => {
    logger.info(`app is running at http:localhost:${app.get("port")} in ${app.get("env")} mode`);
});

export default server;
