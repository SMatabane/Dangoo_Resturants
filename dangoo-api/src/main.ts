import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ExpressAdapter} from '@nestjs/platform-express';
import * as express from 'express';
import {join} from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const server = express(); 

  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  // Enable CORS if needed
  app.enableCors();

  // Configure static file serving from the 'uploads' directory
  app.use('/uploads', express.static(join(process.cwd(), 'uploads')));
  
  await app.listen(3001);
}
bootstrap();
