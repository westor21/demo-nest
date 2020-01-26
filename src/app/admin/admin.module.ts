import {Module} from '@nestjs/common';
import {CsvService} from './services/csv/csv.service';
import {AccommodationServiceModule} from '../$db/accommodation/accommodationService.module';
import {SocketGateway} from './services/socket/socket.gateway';
import {SocketGatewayService} from "./services/socket/socket-gateway.service";

@Module({
  imports: [
    AccommodationServiceModule
  ],
  controllers: [],
  providers: [
    CsvService,
    SocketGateway,
    SocketGatewayService
  ]
})
export class AdminModule {
}
