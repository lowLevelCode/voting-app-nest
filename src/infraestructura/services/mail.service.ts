import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { env } from 'src/env';

@Injectable()
export class MailService 
{

    async sendEmail(email:string)
    {
        // generamos link de confirmacion.

        // creamos el transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: env.mail.user, // generated ethereal user
              pass: env.mail.pass, // generated ethereal password
            },
        });
        
        // enviamos correo
        let info = await transporter.sendMail({
            from: env.mail.company, // sender address
            to: email, // list of receivers
            subject: "Hello s✔", // Subject line
            text: "Hello world?", // plain text body
            html: `<a href="${env.host}/confirmar">Confirmar correo.</a>`, // html body
        });

        return info;
    }
}
