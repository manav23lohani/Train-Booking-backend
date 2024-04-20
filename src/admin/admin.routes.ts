import { Router } from "express";
import { Route } from "../routes/routes.type";

const router = Router();

router.post('/add-train', (req, res, next) => {
    try{

    }
    catch(e){
        next(e);
    }
});
export default new Route('/admin', router);