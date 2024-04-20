import { Router } from "express";
import { Route } from "../routes/routes.type";

const router = Router();

router.post('/signup', (req, res, next) => {
    try{

    }
    catch(e){
        next(e);
    }
});

router.post('/login', (req, res, next) => {
    try{

    }
    catch(e){
        next(e);
    }
});

router.post('/book-ticket', (req, res, next) => {
    try{

    }
    catch(e){
        next(e);
    }
});

router.get('/seat-availability', (req, res, next) => {
    try{

    }
    catch(e){
        next(e);
    }
});

export default new Route('/user', router);