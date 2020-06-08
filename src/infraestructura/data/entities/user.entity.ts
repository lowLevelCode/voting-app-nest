
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, AfterLoad } from 'typeorm';
import * as bcrypt from "bcrypt";

@Entity({name:"users"})
export class UserEntity {

  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  
  async sanitizePassword(password: string)
  {
    return await bcrypt.compare(password,this.password);
  }
  
  @BeforeInsert()
  async hashPassword() 
  {
      const salt = await bcrypt.genSalt();        
      this.password = await bcrypt.hash(this.password, salt);           
  }
  
}