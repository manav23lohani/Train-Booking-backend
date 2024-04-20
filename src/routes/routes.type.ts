import { Router } from "express";

export class Route {
    static registeredRoutes: Route[] = []
    constructor(
        public path: string,
        public router: Router
    ){
        if(!path.startsWith("/")){
            throw new Error('Invalid path');
        }
        if(Route.registeredRoutes.find(r => r.path === this.path)){
            throw new Error (`${this.path} already registered`);
        }
        Route.registeredRoutes.push(this);
    }
}