import { IController } from "../../interfaces/controller.interface";
import {Router, Request, Response, NextFunction} from "express";


export class PingController implements IController {
    public path = "/ping";
    public router = Router()


    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.Ping);
      
    }

    private async Ping(req: Request, res: Response, next: NextFunction) {
      
        res.status(200).json({message:"Ping successful. Server running"})
        next();
    }
}