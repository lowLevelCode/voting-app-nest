import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from './entities/user.entity';
import { env } from 'src/env';


@Module({
    imports:[
        TypeOrmModule.forRoot({
            type: env.db.type as any,
            host: env.db.host,
            port: env.db.port as any,
            username: env.db.username,
            password: env.db.password,
            database: env.db.database,
            entities: [UserEntity],
            synchronize: env.db.synchronize as any,
            logging: env.db.logging as any,
          }),
    ]
})
export class DataModule {}
