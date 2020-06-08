import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/core/user/user.module';
import { MailService } from '../services/mail.service';

@Module({
  imports:[UserModule],
  providers: [AuthService,MailService],
  exports:[AuthService,MailService]
})
export class AuthModule {}
