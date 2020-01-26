import { Injectable } from '@nestjs/common';
import {
  AggregationCursor,
  FindConditions,
  FindManyOptions, FindOneOptions,
  getMongoRepository,
  MongoRepository,
  ObjectLiteral
} from 'typeorm';
import { Accommodation1 } from './accommodation1.entity';
import { AccommodationType } from './accommodationsType';
import { from, Observable } from 'rxjs';
import {tap} from "rxjs/operators";

/*
Tipp für langsames skip:
https://gadelkareem.com/2018/02/11/workaround-slow-pagination-using-skip-mongodb/
z.B.
ids = db.c.find({}, {_id:1}).map(function(item){ return item._id; });
docs = db.c.find( { _id: { $in: ids.slice(2000,2050) } } );
*/

@Injectable()
export class AccommodationService {

  passiveRepo: MongoRepository<AccommodationType>;

  private product1Repository = getMongoRepository(Accommodation1);

  constructor(
  ) {
    this.passiveRepo = this.product1Repository;
  }

  truncateInactiveTable$(): Observable<void> {
    return from(this.passiveRepo.clear());
  }

}
