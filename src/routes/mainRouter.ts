import * as express from "express";
import { studentRoutes } from "./studentRoutes";
import { teacherRoutes } from "./teacherRoutes";

class MainRouter {
    public router: express.Router = express.Router();

    constructor() {
        this.config();
    }

    private config(): void {
        this.router.get("/teachers", teacherRoutes);
        this.router.get("/students", studentRoutes);
    }
}

export const mainRoutes = new MainRouter().router;
