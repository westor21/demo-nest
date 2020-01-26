import { SocketGateway } from './socket.gateway';
import {Injectable} from "@nestjs/common";

@Injectable()
export class SocketGatewayService {

  private _service: SocketGateway;

  get service(): SocketGateway {
    return this._service;
  }
  set service(service: SocketGateway) {
    this._service = service;
  }
}
