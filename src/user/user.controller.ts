import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UseInterceptors } from "@nestjs/common";

import { CreateUserDTO, UpdatePutUserDTO, UpdatePatchUserDTO } from "./dto";
import { UserService } from "./user.service";
import { LogInterceptor } from "src/interceptors/log.interceptors";
import { ParamId } from "src/decodators/paran-id.decorator";

@Controller('users')
export class userController {

    constructor(private readonly userService: UserService) { }

    @Post()
    async create(@Body() body: CreateUserDTO) {
        return this.userService.create(body)
    }

    @Get()
    async find() {
        return this.userService.find()
    }

    @Get(':id')
    async findById(@ParamId() id: number) {
        return this.userService.findById(id)
    }

    @Put(':id')
    async update(@Body() body: UpdatePutUserDTO, @ParamId() id: number) {
        return this.userService.update(id, body)
    }

    @Patch(':id')
    async updatePartial(@Body() body: UpdatePatchUserDTO, @ParamId() id: number) {
        return this.userService.updatePartial(id, body)
    }

    @Delete(':id')
    async delete(@ParamId() id: number) {
        return this.userService.delete(id)
    }
}