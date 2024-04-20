import { Request, Response, NextFunction } from 'express';

export const adminAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.headers['x-api-key'];
    const adminKey = process.env.ADMIN_API_KEY;

    if (!apiKey || apiKey !== adminKey) {
        res.status(401);
        throw 'Unauthorized';
    }

    next();
};
