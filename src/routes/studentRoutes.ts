import express from "express";
import * as studentController from "../controllers/studentController";
import logger from "../utils/logger";

class StudentRoutes {
    public router: express.Router = express.Router();

    constructor() {
        this.config();
    }

    private config(): void {
        logger.info("Nooooow in Student router..."); // micktemp
        this.router.get("/students", studentController.getStudents);
    }
}

export const studentRoutes = new StudentRoutes().router;
