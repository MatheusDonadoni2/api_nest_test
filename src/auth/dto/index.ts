import { IsEmail, IsJWT, IsStrongPassword } from "class-validator";
import { CreateUserDTO } from "src/user/dto";

export class AuthLoginDTO {

    @IsEmail()
    email: string

    @IsStrongPassword({
        minLength: 6,
        minNumbers: 1,
        minUppercase: 1,
        minLowercase: 1,
        minSymbols: 1
    })
    password: string;


}

export class AuthRegisterDTO extends CreateUserDTO { }

export class AuthForgetDTO {
    @IsEmail()
    email: string
}

export class AuthResetDTO {

    @IsStrongPassword({
        minLength: 6,
        minNumbers: 1,
        minUppercase: 1,
        minLowercase: 1,
        minSymbols: 1
    })
    password: string;

    @IsJWT()
    token: string

}