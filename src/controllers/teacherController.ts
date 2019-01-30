import { NextFunction, Request, Response } from "express";
import { Teacher } from "../models/teacherModel";
import logger from "../utils/logger"; // micktemp

export function getAllTeachers(req: Request, res: Response, next: NextFunction) {
    Teacher.findAll()
        .then((teachers) => {
            res.status(200).json({ teachers });
        })
        .catch((err) => res.status(500).json({ err: ["Oops", err ]}));
    }

export function getTeacherById(req: Request, res: Response, next: NextFunction) {
        logger.info("getTeacher...");
        logger.info("params = %o", req.params);
        Teacher.findById(req.params.teacherId)
        .then((teacher) => {
            res.status(200).json({ teacher });
        })
        .catch((err) => res.status(500).json ({ err: ["Requested teacherId not found", err] }));
    } 
