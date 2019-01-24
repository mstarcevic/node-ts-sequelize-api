import { Request, Response, NextFunction } from "express";

export function getTeachers(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({
        teachers: [{ id: 1, firstName: "Donald", surname: "Trumper" }]
    });
};
