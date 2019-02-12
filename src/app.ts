import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import { mainRoutes } from "./routes/mainRouter";
import logger from "./utils/logger";

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        logger.info("Doing all the preliminaries in app.js...");

        dotenv.config({ path: ".env.sample" });
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use("/", mainRoutes);
    }
}

export default new App().app;
