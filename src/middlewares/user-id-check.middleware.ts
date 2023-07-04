import { NextFunction } from "express";
import { BadRequestException, NestMiddleware } from "@nestjs/common";

export class UserIdCheckMiddeware implements NestMiddleware {
    use(req: any, res: any, next: (error?: NextFunction) => void) {
        if (isNaN(Number(req.params.id))) {
            throw new BadRequestException('Invalid id.')
        }

        if (Number(req.params.id) <= 0) {
            throw new BadRequestException('Invalid id.')
        }
        console.log('Middleware user check id ')

        next()
    }
}