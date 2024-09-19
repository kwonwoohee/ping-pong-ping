import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './users/entities/user.entity';
import { MatchesModule } from './matches/matches.module';
import { MatchModel } from './matches/entities/match.entity';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'pingpong',
      password: 'pingpong',
      database: 'pingpong',
      entities: [
        UserModel,
        MatchModel,
      ],
      synchronize: true,
    }),
    MatchesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
