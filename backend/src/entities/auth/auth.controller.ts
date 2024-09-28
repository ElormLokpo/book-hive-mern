import { NextFunction, Request, Response, Router } from "express";
import { IController } from "../../interfaces/controller.interface";
import { IAuth } from "./auth.types";
import { GenerateResponse } from "../../helpers/response.generator";
import { AuthModel } from "./auth.model";
import bcrypt from "bcrypt"
import { GenerateToken } from "../../helpers/token.generator";



export class AuthController implements IController {
    public path = "/auth";
    public router = Router();


    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.post(`${this.path}/register`, this.RegisterUser);
        this.router.post(`${this.path}/login`, this.LoginUser)
    }

    private async RegisterUser(req: Request, res: Response, next: NextFunction) {
        const { username, password } = req.body as IAuth;
        if (!username || !password) {
            let response = GenerateResponse(false, "Username or Password required", {});
            res.status(200).json(response)
            next()
        }

        let user_query = await AuthModel.findOne({ username });
        if (user_query) {
            let response = GenerateResponse(false, `User with username: ${username} already exists  `, {});
            res.status(200).json(response)
            next()
        }

        await AuthModel.create({ username, password });
        let response = GenerateResponse(true, "User added Successfully", {})
        res.status(200).json(response)
        next();
    }

    private async LoginUser(req: Request, res: Response, next: NextFunction) {
        const { username, password } = req.body as IAuth;
        if (!username || !password) {
            let response = GenerateResponse(false, "Username or Password required", {});
            res.status(200).json(response)
            next()
        }

        let user_query = await AuthModel.findOne({ username }).select("+password");
        if (!user_query) {
            let response = GenerateResponse(false, `User with username: ${username} does not exist`, {});
            res.status(200).json(response)
            next()
        }

        let password_valid = await bcrypt.compare(password, user_query.password);

        if (!password_valid) {
            let response = GenerateResponse(false, "Incorrect Password", {})
            res.status(200).json(response)
            next();
        }

        let token = GenerateToken({id: user_query._id})
        let response = GenerateResponse(true, "Login Successful",  {id:user_query._id, username:user_query.username, token})
        res.status(200).json(response)
        next();
    }
}