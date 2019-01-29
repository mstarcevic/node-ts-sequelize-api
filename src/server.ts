import app from "./app";
import sequelize from "./utils/database";
import logger from "./utils/logger"; // micktemp

logger.info("Hello from the api server"); // micktemp

const server = app.listen(app.get("port"), () => {
    logger.info(`app is running at http:localhost:${app.get("port")} in ${app.get("env")} mode`);
});

sequelize.sync(); // Should this be here or in app? Or should there be a separate sync in each model?

export default server;
