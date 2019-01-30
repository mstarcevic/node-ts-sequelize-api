import { NextFunction, Request, Response } from "express";
import { Student } from "../models/studentModel";
import logger from "../utils/logger"; // micktemp

export function getAllStudents(req: Request, res: Response, next: NextFunction) {
    Student.findAll()
        .then((students) => {
            res.status(200).json({ students });
        })
        .catch((err) => res.status(500).json({ err: ["Oops", err ]}));
}

export function getStudentById(req: Request, res: Response, next: NextFunction) {
    logger.info("geStudent...");
    logger.info("params = %o", req.params);
    Student.findById(req.params.studentId)
    .then((student) => {
        res.status(200).json({ student });
    })
    .catch((err) => res.status(500).json ({ err: ["Requested teacherId not found", err] }));
}
