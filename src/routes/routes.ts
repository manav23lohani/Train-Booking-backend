import { Application, NextFunction, json, Request, Response } from "express";
import { Routes } from "./routes.data";
import { ResponseHandler } from "../middlewares/response.handler";

export const registerMiddlewares = (app: Application) => {
    app.use(json());

    for(let route of Routes){
        app.use(route.path, route.router);
    }

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.send(new ResponseHandler(null, err));
    });
}