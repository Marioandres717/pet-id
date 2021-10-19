import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetSpeciesModule } from './pet-species/pet-species.module';
import { PetsModule } from './pets/pets.module';
import { UsersModule } from './user/user.module';
import { AddressesModule } from './addresses/addresses.module';
import { EventStoreModule } from './event-store/event-store.module';
import { join } from 'path';

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
      typePaths: ['./**/api/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/new-graphql.ts'),
      },
    }),
    PetSpeciesModule,
    PetsModule,
    UsersModule,
    AddressesModule,
    EventStoreModule,
  ],
})
export class AppModule {}
