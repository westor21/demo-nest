import { Column, Entity, Index, ObjectID, ObjectIdColumn } from 'typeorm';
import {ACCOMMODATION_TABLE1} from "../../api-settings";

@Entity({name: ACCOMMODATION_TABLE1})
export class Accommodation1 {

  @ObjectIdColumn()
  id: ObjectID;

  @Index()
  @Column()
  merchantId: string;

}
