import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { PetSpeciesModule } from './pet-species/pet-species.module';
import { PetsModule } from './pets/pets.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'asd132',
      database: 'pet_id',
      synchronize: true,
      autoLoadEntities: true,
      keepConnectionAlive: true,
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
    PetSpeciesModule,
    PetsModule,
    UsersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
