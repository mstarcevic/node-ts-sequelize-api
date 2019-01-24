import express from "express";
import logger from "../utils/logger";
import * as teacherController from "../controllers/teacherController";

class TeacherRoutes {
    public router: express.Router = express.Router();

    constructor() {
        this.config();
    }

    private config(): void {
        logger.info("now in Teachers router..."); // micktemp
        this.router.get("/teachers", teacherController.getTeachers);
    }
}

export const teacherRoutes = new TeacherRoutes().router;
