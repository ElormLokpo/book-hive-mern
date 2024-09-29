import { NextFunction, Request, Response } from "express";
import { GenerateResponse } from "../helpers/response.generator";
import jwt from "jsonwebtoken";


export const AuthorizationMiddleware = (req: Request, res:Response, next:NextFunction)=>{
    let token_headers = req.headers["authorization"]

    if(!token_headers){
        let response = GenerateResponse(false, "Unauthorized to perform this action", {})
        res.status(200).json(response);
        next();
        
    }

    let token = token_headers.split(" ")[1]
    let verified_token = jwt.verify(token, process.env.TOKEN_SECRET)

    console.log(verified_token)
    next();
}