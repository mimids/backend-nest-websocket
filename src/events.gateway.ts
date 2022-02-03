import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
  MessageBody,
  ConnectedSocket
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(3001,{ cors: true })
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: any): WsResponse<string> {
    return { event: 'response', data: data };
  }

  @SubscribeMessage('broadcast')
  broadcast(@MessageBody() data: any ,@ConnectedSocket() client: Socket): void {
  data.id=client.id;
    this.server.emit('broadcast', data)
  }

  @SubscribeMessage('broadcastSalon')
  broadcastSalon(@MessageBody() salon: any ,@ConnectedSocket() client: Socket): void {
    this.server.emit('broadcastSalon', salon)
  }

}