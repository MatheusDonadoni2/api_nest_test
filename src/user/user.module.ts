import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";

import { UserService } from "./user.service";
import { userController } from "./user.controller";
import { PrismaModule } from "src/prisma/prisma.model";
import { UserIdCheckMiddeware } from "src/middlewares/user-id-check.middleware";


@Module({
    imports: [PrismaModule],
    controllers: [userController],
    providers: [UserService],
    exports: [UserService]
})

export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserIdCheckMiddeware).forRoutes({
            path: '/users/:id',
            method: RequestMethod.ALL
        })
    }
}