import "reflect-metadata"
import connection from '../database/connection'
import CarService from "../services/CarService"
import { Car } from "../models/Car.entity"
import { json } from "body-parser";

beforeAll(async ()=>{
    await connection.create();
});

beforeEach(async () => {
    await connection.clear();
});

it('Test Car Create', async () => {
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
    
    expect(car.id).toBeDefined()
    expect(car.created_at).toBeDefined()
    expect(car.updated_at).toBeDefined()
    expect(car.deleted_at).toBeNull()

    delete car.id
    delete car.created_at
    delete car.updated_at
    delete car.deleted_at

    expect(car).toStrictEqual(carInfo)
})

it('Test Car Update', async () => {
    const carService = CarService.getInstance()
    const car: Car = await carService.create({
        plate: "abc1234",
        model: "corsa",
        brand: "chevrolet",
        year: 2019,
        kilometer: 20000,
        tier: 3
    })
    
    const carModel = 'celta'

    let updatedCar = await carService.update(car.id, { model: carModel })
    
    expect(car?.id).toBeDefined()
    expect(car?.created_at).toBeDefined()
    expect(car?.updated_at).toBeDefined()
    expect(car?.deleted_at).toBeNull()
    expect(car?.key).toBeUndefined()

    let jsonCar = updatedCar instanceof Car ? updatedCar.toJson() : updatedCar

    delete jsonCar?.id
    delete jsonCar?.created_at
    delete jsonCar?.updated_at

    expect(jsonCar).toStrictEqual({
        plate: "abc1234",
        model: "celta",
        brand: "chevrolet",
        year: 2019,
        kilometer: 20000,
        tier: 3
    })
})

it('Test Car Delete', async () => {
    const carService = CarService.getInstance()
    const car: Car = await carService.create({
        plate: "abc1234",
        model: "corsa",
        brand: "chevrolet",
        year: 2019,
        kilometer: 20000,
        tier: 3
    })

    const deletedCar = await carService.delete(car.id)

    expect(deletedCar).toBe(true)
})