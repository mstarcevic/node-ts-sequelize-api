import express from "express";
import * as teacherController from "../controllers/teacherController";
import logger from "../utils/logger";

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
