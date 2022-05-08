import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './modules/users/entities/user.entity';
import { UsersModule } from './modules/users/users.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME_DEVELOPMENT,
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      dialectOptions: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      models: [User],
    }),
    UsersModule,
  ],
})
export class AppModule {}
