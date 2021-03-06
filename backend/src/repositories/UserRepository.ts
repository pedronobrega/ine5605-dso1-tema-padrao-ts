import { Repository, EntityRepository } from "typeorm";
import { User } from "../models/User.entity";

@EntityRepository(User)
export default class UserRepository extends Repository<User> {}