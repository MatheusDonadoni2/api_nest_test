import { Controller, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
import { PrismaModule } from "src/prisma/prisma.model";

@Module({
    imports: [JwtModule.register({
        secret: 'dsajlkdaso2i1hfiosdgiuwefdgasu1f'
    }), UserModule, PrismaModule],
    controllers: [AuthController]
})

export class AuthModule { }

