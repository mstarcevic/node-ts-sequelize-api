import * as express from "express";
import { catchAllRoutes } from "./catchAllRoutes";
import { studentRoutes } from "./studentRoutes";
import { teacherRoutes } from "./teacherRoutes";

class MainRouter {
    public router: express.Router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get(/^\/teacher(\/.+|s)$/, teacherRoutes);
        this.router.post(/^\/teacher$/, teacherRoutes);
        this.router.delete(/^\/teacher\/.+$/, teacherRoutes);
        this.router.get(/^\/student(\/.+|s)$/, studentRoutes);
        this.router.use("/", catchAllRoutes);
    }
}

export const mainRoutes = new MainRouter().router;
