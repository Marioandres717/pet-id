import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetSpeciesModule } from './pet-species/pet-species.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      debug: true
    }),
    PetSpeciesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
