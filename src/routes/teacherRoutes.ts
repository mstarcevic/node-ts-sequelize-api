import express from "express";
import * as teacherController from "../controllers/teacherController";

class TeacherRoutes {
    public router: express.Router = express.Router();

    constructor() {
        this.config();
    }

    private config(): void {
        this.router.get("/teachers", teacherController.getAllTeachers);
        this.router.get("/teacher/:teacherId", teacherController.getTeacherById);
    }
}

export const teacherRoutes = new TeacherRoutes().router;
