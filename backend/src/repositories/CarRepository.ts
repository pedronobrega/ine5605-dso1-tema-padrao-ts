import { Repository, EntityRepository } from 'typeorm'
import { Car } from '../models/Car.entity';

@EntityRepository(Car)
export default class CarRepository extends Repository<Car> {}