import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserRepository } from 'src/infraestructura/data/repositories/user.repository';

const modules = [
    TypeOrmModule.forFeature([UserRepository]),
]

const providers = [
    UserService
];

@Module({
    imports:[...modules],
    providers: [...providers],
    exports:[...modules, ...providers]
})
export class UserModule {}
