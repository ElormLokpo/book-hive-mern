import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"
import cors from "cors";
import { IController } from "interfaces/controller.interface";

export class App {
    public app: express.Express;

    constructor(controllers:IController[]) {
        this.app = express();
        this.initializeMiddleware();
        this.initializeDatabase();
        this.initializeControllers(controllers);
    }


    public Listen() {
        let port = process.env.PORT
        this.app.listen(port, () => console.log(`Server listening on PORT:${port}`))
    }

    private initializeDatabase() {
        mongoose.connect(process.env.MONGO_URL);
        mongoose.Promise = Promise;
        console.log("Database Connected")
        mongoose.connection.on("error", (error: Error) => console.log(error));
    }

    private initializeMiddleware() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(cookieParser())
    }

    private initializeControllers(controllers: IController[]) {
        controllers.forEach(controller => this.app.use("/", controller.router))
    }
}