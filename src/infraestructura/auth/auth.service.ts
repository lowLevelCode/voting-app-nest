import { Injectable } from '@nestjs/common';
import { UserService } from 'src/core/user/user.service';
import { MailService } from '../services/mail.service';

@Injectable()
export class AuthService 
{
    constructor(private readonly userService:UserService, private readonly mailService:MailService){}

    async signup(createUserDto:any):Promise<any | null>
    {
        // crear usuario
        let userCreated = await this.userService.create(createUserDto);

        // crear token

        // enviar correo
        this.mailService.sendEmail(userCreated.email);

        return userCreated;
    }
}
