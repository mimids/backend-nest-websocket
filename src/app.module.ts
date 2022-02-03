import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsGateway } from './events.gateway';
import { ChatsModule } from './chats/chats.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ChatsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, EventsGateway],
})
export class AppModule {}
