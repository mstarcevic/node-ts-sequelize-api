import express from "express";
import * as studentController from "../controllers/studentController";

class StudentRoutes {
    public router: express.Router = express.Router();

    constructor() {
        this.config();
    }

    private config(): void {
        this.router.get("/students", studentController.getAllStudents);
        this.router.get("/student/:studentId", studentController.getStudentById);
    }
}

export const studentRoutes = new StudentRoutes().router;
