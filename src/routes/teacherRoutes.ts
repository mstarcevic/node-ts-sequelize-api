import express from "express";
import { body } from "express-validator/check";
import * as teacherController from "../controllers/teacherController";

class TeacherRoutes {
    public router: express.Router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        const minLen = 1;
        const commonMsg = `Must be at least ${minLen} character long!`;

        this.router.get("/teachers", teacherController.getAllTeachers);
        this.router.get("/teacher/:teacherId", teacherController.getTeacherById);

        this.router.post("/teacher", [
            body("teacherNo").trim().isLength({min: minLen}).withMessage(commonMsg),
            body("firstName").trim().isLength({min: minLen}).withMessage(commonMsg),
            body("lastName").trim().isLength({min: minLen}).withMessage(commonMsg),
        ], teacherController.createTeacher);

        this.router.delete("/teacher/:teacherId", teacherController.deleteTeacher);
    }
}

export const teacherRoutes = new TeacherRoutes().router;
