import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDTO, UpdatePatchUserDTO, UpdatePutUserDTO } from "./dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) { }

    async create({ name, email, password }: CreateUserDTO) {
        return this.prisma.users.create({
            data: { email, password, name }
        })
    }

    async findById(id: number) {
        return this.prisma.users.findUnique({
            where: {
                id
            }
        })
    }

    async find() {
        return this.prisma.users.findMany()
    }

    async update(id: number, data: UpdatePutUserDTO) {
        await this.exists(id)

        return this.prisma.users.update({
            data: {
                name: data.name,
                birthAt: data.birthAt ? new Date(data.birthAt) : null,
                email: data.email,
                password: data.password
            },
            where: {
                id
            }
        })
    }

    async updatePartial(id: number, data: UpdatePatchUserDTO) {
        await this.exists(id)

        return this.prisma.users.update({
            data,
            where: {
                id
            }
        })
    }

    async delete(id: number) {
        await this.exists(id)

        return this.prisma.users.delete({
            where: {
                id
            }
        })
    }

    async exists(id: number) {
        if (! await this.findById(id)) {
            throw new NotFoundException('User not exists')
        }
    }


}