import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";

export function catchAllRoutes(req: Request, res: Response, next: NextFunction) {
    logger.info("req.body = %o", req.body);

    // Page not found
    res.status(404).json({ err: "Invalid route requested!" });
}
