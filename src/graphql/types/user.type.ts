import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class UserType {

  @Field(type => ID)
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;
}