import { Request, Response, NextFunction } from "express";

export function getStudents(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({
        students: [
            { id: 12, firstName: "Samuel", surname: "Fewster" },
            { id: 12, firstName: "Matthew", surname: "Maiden" },
            { id: 12, firstName: "Jonothan", surname: "Ryder" }
        ]
    });
};
