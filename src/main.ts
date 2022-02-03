import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
var cors = require('cors');


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  app.use(cors())
  app.use(cors({
    origin:['http://localhost:4200','http://127.0.0.1:4200'],
    credentials:true
}));


}
bootstrap();


