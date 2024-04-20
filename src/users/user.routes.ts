import { Router } from "express";
import { Route } from "../routes/routes.type";
import { seatAvailabilityService, loginService, signupService } from "./user.services";
import { ResponseHandler } from "../middlewares/response.handler";

const router = Router();

router.post('/signup', async(req, res, next) => {
    try{
        const { username, email, password } = req.body;
        const response = await signupService(username, email, password);
        res.send(new ResponseHandler(response));
    }
    catch(e){
        next(e);
    }
});

router.post('/login', async(req, res, next) => {
    try{
        const { email, password } = req.body;
        const token = await loginService(email, password);
        res.send(new ResponseHandler({token}));
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

router.get('/seat-availability', async(req, res, next) => {
    const { source, destination } = req.query;
    try {
        const trains = await seatAvailabilityService(String(source), String(destination));
        res.send(new ResponseHandler({trains}));
    } catch (e) {
        next(e);
    }
});

export default new Route('/user', router);