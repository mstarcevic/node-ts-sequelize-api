import app from "./app";
import sequelize from "./utils/database";
import logger from "./utils/logger";

const server = app.listen(app.get("port"), () => {
    logger.info(`app is running at http:localhost:${app.get("port")} in ${app.get("env")} mode`);
});

sequelize.sync();

export default server;
