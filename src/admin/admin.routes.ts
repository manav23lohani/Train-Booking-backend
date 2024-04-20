import { Router } from "express";
import { Route } from "../routes/routes.type";
import { adminAuthMiddleware } from "../utilities/admin.auth";
import { addTrainService } from "./admin.services";
import { ResponseHandler } from "../utilities/response.handler";

const router = Router();
router.post('/add-train', adminAuthMiddleware, async (req, res, next) => {
    try {
        const { trainName, startStation, endStation, numberOfSeats } = req.body;
        const trainId = await addTrainService(trainName, startStation, endStation, numberOfSeats);
        res.send(new ResponseHandler(trainId));
    }
    catch (e) {
        next(e);
    }
});
export default new Route('/admin', router);
