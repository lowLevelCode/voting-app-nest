import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from "@nestjs/graphql";
import { UserResolver } from './resolvers/user/user.resolver';
import { UserModule } from 'src/core/user/user.module';
import { AuthModule } from 'src/infraestructura/auth/auth.module';

@Module({
    imports:[
        GraphQLModule.forRoot({
            autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
          }),   
          AuthModule       
    ],
    providers: [UserResolver]
})
export class GraphqlModule {}
