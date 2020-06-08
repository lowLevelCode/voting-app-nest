import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserRepository } from 'src/infraestructura/data/repositories/user.repository';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserEntity } from 'src/infraestructura/data/entities/user.entity';



@Injectable()
export class UserService {
    
    constructor(private readonly userRepository:UserRepository){}

    async create(createUserDto:CreateUserDto):Promise<CreateUserDto>
    {        

        const {email} = createUserDto;        
        const userExist = await this.userRepository.findOne({email})
        
        if(userExist)
            throw new HttpException("El correo ya existe", HttpStatus.BAD_REQUEST);
        
        let user:UserEntity = new UserEntity();
        Object.assign(user,createUserDto);

        return await this.userRepository.save(user);;
    }
}
