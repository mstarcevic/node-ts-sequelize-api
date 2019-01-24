import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import logger from "./utils/logger";
import { mainRoutes } from "./routes/mainRouter";

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        logger.info("Doing all the config stuff in app.js..."); // micktemp
        dotenv.config({ path: ".env.sample" });
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use("/", mainRoutes);
    }
}

export default new App().app;
