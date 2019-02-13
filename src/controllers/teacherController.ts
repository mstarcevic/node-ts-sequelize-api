import bcrypt from "bcryptjs";
import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator/check";
import { teacher } from "../models/teacherModel";
import logger from "../utils/logger"; // micktemp

export function getAllTeachers(req: Request, res: Response, next: NextFunction) {
    teacher.findAll()
        .then((teachers) => {
            res.status(200).json({ teachers });
        })
        .catch((err) => res.status(500).json({ err: ["Unable to retrieve teachers!", err ]}));
}

export function getTeacherById(req: Request, res: Response, next: NextFunction) {
    teacher.findByPk(req.params.teacherId)
        .then((teacherData) => {
            if (!teacherData) {
                return res.status(404).json({ message: "Teacher id specified does not exist!" });
            }
            res.status(200).json({ teacherData });
        })
        .catch((err) => res.status(500).json({ err: ["Requested teacherId not found", err] }));
}

function doCreateTeacher(hashedPwd: string, req: Request, res: Response, next: NextFunction) {
    teacher
        .create({
            teacherNo: req.body.teacherNo,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            title: req.body.title,
            classCode: req.body.classCode,
            specialist: req.body.specialist,
            username: req.body.username,
            password: hashedPwd,
        })
        .then((newTeacher) => {
            const msg =
                `Teacher ${newTeacher.firstName} ${newTeacher.lastName} created with id ${newTeacher.teacherId}...`;
            return res.status(200).json({ message: `${msg}` });
        });
}

export function createTeacher(req: Request, res: Response, next: NextFunction) {
    logger.debug("Now creating teacher...");

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ message: "Teacher not created, data contains errors", errors: errors.array() });
    }

    bcrypt
        .hash(req.body.password, 12)
        .then((hashedPassword) => {
            doCreateTeacher(hashedPassword, req, res, next);
        })
        .catch((err) => {
            const msg = "Teacher not created, unable to encrypt the password";
            return res.status(422).json({ message: `${msg}`});
        });
}

export function deleteTeacher(req: Request, res: Response, next: NextFunction) {
    logger.debug("Now deleting teacher...");

    teacher.findByPk(req.params.teacherId)
        .then((teacherData) => {
            if (!teacherData) {
                return res.status(404).json({ message: `Teacher id ${req.params.teacherId} does not exist!` });
            }
            teacher
                .destroy({ where: { teacherId: teacherData.teacherId }})
                .then((deletedTeacher) => {
                    if (deletedTeacher) {
                        res.status(200).json({ message: `Teacher id ${teacherData.teacherId} successfully deleted!`});
                    }
                    // res.status(500).json({ message: `Unable to delete teacher id ${teacherData.teacherId}`})
                    throw new Error(); // Not sure whether this will work. Needs some verification.
                })
                .catch((err) => res.status(500).json({ err: ["Unable to delete teacher", err]}));
        })
        .catch((err) => res.status(500).json ({ err: ["Requested teacherId not found", err] }));
}
