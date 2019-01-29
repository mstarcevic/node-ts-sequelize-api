import { NextFunction, Request, Response } from "express";
import { Teacher } from "../models/teacherModel";
import logger from "../utils/logger"; // micktemp

export function getTeachers(req: Request, res: Response, next: NextFunction) {
    Teacher.findAll()
        .then((teachers) => {
            logger.info("teachers = %o", teachers); // micktemp
            res.status(200).json({ teachers });
        })
        .catch((err) => res.status(500).json({ err: ["Oops", err ]}));
}
