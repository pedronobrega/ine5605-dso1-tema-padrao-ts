import connection from '../database/connection'
import { getConnection } from 'typeorm'
import CarService from "../services/CarService"
import { Car } from "../models/Car"

beforeAll(async ()=>{
    await connection.create();
});

afterAll(async ()=>{
    const connection = getConnection('default')
    await connection.close();
});

beforeEach(async () => {
    await connection.clear();
});

it('Test User Creation', async () => {
    const carInfo = {
        plate: "abc1234",
        model: "corsa",
        brand: "chevrolet",
        year: 2019,
        kilometer: 20000,
        tier: 3
    }

    const carService = CarService.getInstance()
    const car: Car = await carService.create(carInfo)

    expect(car.toJson()).toBe({
        plate: "abc1234",
        model: "corsa",
        brand: "chevrolet",
        year: 2019,
        kilometer: 20000,
        tier: 3
    })
})