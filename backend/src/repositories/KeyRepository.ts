import { Repository, EntityRepository } from "typeorm";
import { Key } from "../models/Key";

@EntityRepository(Key)
export default class KeyRepository extends Repository<Key> {}