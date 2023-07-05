import { Body, Controller, Post } from "@nestjs/common";
import { AuthForgetDTO, AuthLoginDTO, AuthRegisterDTO, AuthResetDTO } from "./dto";
import { UserService } from "src/user/user.service";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {

    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService

    ) { }

    @Post('login')
    async login(@Body() { email, password }: AuthLoginDTO) {
        this.authService.login(email, password)
    }

    @Post('registe')
    async auth(@Body() body: AuthRegisterDTO) {
        return this.userService.create(body)
    }

    @Post('forget')
    async forget(@Body() { email }: AuthForgetDTO) {
        this.authService.forget(email)
    }

    @Post('reset')
    async reset(@Body() { password, token }: AuthResetDTO) {
        this.authService.reset(password, token)
    }
}