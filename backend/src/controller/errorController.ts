import { Request, Response, NextFunction } from 'express';

export default function globalerrorHandler(err: Express.Error, req: Request, res: Response, next: NextFunction) {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
}
