import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Allow CORS
  app.enableCors({
    origin: 'http://localhost:3000', // Allow running frontend at localhost:3000
    credentials: true,
  });

  await app.listen(5000);
}
bootstrap();
