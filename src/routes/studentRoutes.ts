import express from "express";
import logger from "../utils/logger";
import * as studentController from "../controllers/studentController";

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
