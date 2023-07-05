import { JwtService } from "@nestjs/jwt";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService, private readonly prismaService: PrismaService) { }


    async createToken() {
        // return this.jwtService.sign()
    }

    async checktoken() {
        // return this.jwtService.verify()
    }

    async login(email: string, password: string) {
        const user = await this.prismaService.users.findFirst({
            where: {
                email,
                password
            }
        })

        if (!user) {
            throw new UnauthorizedException('Email ou senha incorretos.')
        }



    }
    async forget(email: string,) {
        const user = await this.prismaService.users.findFirst({
            where: {
                email
            }
        })

        if (!user) {
            throw new UnauthorizedException('Email incorreto.')
        }

        return true

    }
    async reset(password: string, token: string) {
        const id = 0

        this.prismaService.users.update({
            where: { id },
            data: {
                password
            }
        })

        return true
    }

}

