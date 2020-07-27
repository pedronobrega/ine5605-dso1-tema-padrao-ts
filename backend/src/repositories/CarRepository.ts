import { Repository, EntityRepository } from 'typeorm'
import { Car } from '../models/Car';

@EntityRepository(Car)
export default class CarRepository extends Repository<Car> {}