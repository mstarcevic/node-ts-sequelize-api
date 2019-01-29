import { NextFunction, Request, Response } from "express";
import { Student } from "../models/studentModel";

/*
import BaseController from "./baseController";

class StudentController extends BaseController {
    constructor() {
        super();
    }
}
*/

export function getStudents(req: Request, res: Response, next: NextFunction) {
    Student.findAll()
        .then((students) => {
            res.status(200).json({ students });
        })
        .catch((err) => res.status(500).json({ err: ["Oops", err ]}));
}
