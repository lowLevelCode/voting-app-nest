import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './graphql/graphql.module';
import { DataModule } from './infraestructura/data/data.module';
import { AuthModule } from './infraestructura/auth/auth.module';
import { MailModule } from './core/mail/mail.module';

@Module({
  imports: [GraphqlModule, DataModule, AuthModule, MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
