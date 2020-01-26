import { Injectable } from '@nestjs/common';
import {AccommodationService} from "../../../$db/accommodation/accommodation.service";

@Injectable()
export class CsvService {
  constructor(
    private readonly accommodationService: AccommodationService
  ) {
  }

  async handleCsv(): Promise<any> {
    await this.accommodationService.truncateInactiveTable$();
  }
}
