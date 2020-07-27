export default abstract class GeneralService {

    abstract find(): {}
    abstract findById(id: number | string): {}
    abstract create(body: {}): {}
    abstract update(id: number | string, body: {}): {}
    abstract delete(id: number | string): any

}