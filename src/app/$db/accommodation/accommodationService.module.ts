import { Module } from '@nestjs/common';
import { AccommodationService } from './accommodation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accommodation1 } from './accommodation1.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Accommodation1], 'default')
  ],
  providers: [AccommodationService],
  exports: [AccommodationService]
})
export class AccommodationServiceModule {}
