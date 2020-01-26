import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway
} from '@nestjs/websockets';
import {Injectable, Logger} from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { SocketGatewayService } from './socket-gateway.service';
import { CsvService } from '../csv/csv.service';
import { AccommodationService } from '../../../$db/accommodation/accommodation.service';

@Injectable()
@WebSocketGateway(5555)
export class SocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private logger: Logger = new Logger('SocketGateway');
  private clients: {[key: string]: Socket } = {};

  log = function(clientId: string, data: any) {
    console.log(clientId, data);
    this.clients[clientId].emit('message', data);
  }.bind(this);

  constructor(
    private csvService: CsvService,
    private accomodationService: AccommodationService,
    private socketGatewayService: SocketGatewayService
  ) {
    socketGatewayService.service = this; // work around circular dependencies
  }

  // @Roles('admin')
  @SubscribeMessage('message')
  handleEvent(@MessageBody() data: any, @ConnectedSocket() client: Socket): void {
  }

  afterInit(server: Server) {
  }

  handleDisconnect(client: Socket) {
  }

  handleConnection(client: Socket, ...args: any[]) {
  }

}
