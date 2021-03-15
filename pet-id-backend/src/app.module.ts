import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetSpeciesService } from './pet-species/pet-species.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql']
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PetSpeciesService],
})
export class AppModule {}
