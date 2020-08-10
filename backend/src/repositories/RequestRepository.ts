import { Repository, EntityRepository } from "typeorm";
import { Request } from "../models/Request.entity";

@EntityRepository(Request)
export default class RequestRepository extends Repository<Request>{}