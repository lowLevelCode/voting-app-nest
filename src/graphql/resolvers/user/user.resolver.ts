import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SignUpInput } from 'src/graphql/inputs/signup.input';
import { UserType } from 'src/graphql/types/user.type';
import { AuthService } from 'src/infraestructura/auth/auth.service';

@Resolver('User')
export class UserResolver {

    constructor(private readonly authService:AuthService){}
    
    @Query(()=>String)
    async hello()
    {
        return "HOla que tal la monda";
    }

    @Mutation(()=> UserType)
    async signup(@Args("signupin") signup:SignUpInput)
    {
        return await this.authService.signup(signup);
    } 
}
