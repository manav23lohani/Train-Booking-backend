import { Router } from "express";
import { Route } from "../routes/routes.type";
import { loginUser, signup } from "./user.services";
import { ResponseHandler } from "../utilities/response.handler";

const router = Router();

router.post('/signup', async(req, res, next) => {
    try{
        const { username, email, password } = req.body;
        const response = await signup(username, email, password);
        res.send(new ResponseHandler(response));
    }
    catch(e){
        next(e);
    }
});

router.post('/login', async(req, res, next) => {
    try{
        const { email, password } = req.body;
        const token = await loginUser(email, password);
        res.json({ token });
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