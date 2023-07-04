import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [JwtModule.register({
        secret: 'dsajlkdaso2i1hfiosdgiuwefdgasu1f'
    })]
})

export class AuthModule { }

