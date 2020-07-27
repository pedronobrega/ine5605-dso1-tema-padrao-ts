import { Repository, EntityRepository } from "typeorm";
import { Request } from "../models/Request";

@EntityRepository(Request)
export default class RequestRepository extends Repository<Request>{}