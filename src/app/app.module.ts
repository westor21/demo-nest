// framework
import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {MongoConnectionOptions} from "typeorm/driver/mongodb/MongoConnectionOptions";
// modules
import {AdminModule} from './admin/admin.module';
// entities
import {Accommodation1} from './$db/accommodation/accommodation1.entity';
import {MONGO_HOST, MONGO_INITDB_DATABASE} from "./api-settings.local";

const APP_MODULES = [
  AdminModule,
];

const MONGO_ENITIES = [
  Accommodation1
];

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      name: 'default',
      useFactory: async (configService: ConfigService) => {
        const host = configService.get('MONGO_HOST') || MONGO_HOST;
        const database = configService.get('MONGO_INITDB_DATABASE') || MONGO_INITDB_DATABASE;
        console.log(`mongo uses ${host} and ${database}`);
        return (
          {
            type: 'mongodb',
            host: configService.get('MONGO_HOST'),
            database: configService.get('MONGO_INITDB_DATABASE'),
            synchronize: true,
            logging: false,
            entities: MONGO_ENITIES
          } as MongoConnectionOptions);
      },
      inject: [ConfigService],
    }),
    ...APP_MODULES
  ]
})
export class AppModule {
}
