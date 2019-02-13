import Sequelize from "sequelize";
import logger from "../utils/logger";

// micktodo Caused an error when getting details from secrets..
// micktodo Can't be exposing database login details like this!
const sequelizeConnection = new Sequelize("ntsa", "root", "de2lA6??", { 
    dialect: "mysql", // Using process.env.DATABASE_DIALECT rather then "mysql" caused a compile error...
    host: process.env.DATABASE_HOST,
    define: { timestamps: true },
    pool: { max: 5, idle: 30 },
    databaseVersion: 8.0
});

sequelizeConnection
    .authenticate()
    .then((err) => {
        logger.info("Connection has been established successfully.");
    })
    .catch((err) => {
        logger.info("Unable to connect to the database:", err);
    });

export default sequelizeConnection;
