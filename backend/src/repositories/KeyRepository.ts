import { Repository, EntityRepository } from "typeorm";
import { Key } from "../models/Key.entity";

@EntityRepository(Key)
export default class KeyRepository extends Repository<Key> {}