import *as dotenv from "dotenv";

dotenv.config();

export const env = {
    host:process.env.HOST,
    db:{
        type: process.env.TYPE,
        host: process.env.HOST_DB,
        port: process.env.PORT,
        username: process.env.USERNAME_DB,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,    
        synchronize: process.env.SYNCHRONIZE,
        logging:process.env.LOGGING,
    },
    mail:{
        company:process.env.COMPANY_MAIL,
        user: process.env.USER_MAIL,
        pass: process.env.PASS_MAIL
    }
}