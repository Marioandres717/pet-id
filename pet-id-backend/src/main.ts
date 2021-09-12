import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connect as connectToEventStore } from './event-store';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await connectToEventStore();
  await app.listen(3000);
  console.log('App Running on Port 3000');

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
