import { createConnection, getConnection } from 'typeorm'
import 'reflect-metadata'

const connection = {
    async create() {
        await createConnection()
    },

    async clear() {
        const connection = await getConnection()
        const entities = connection.entityMetadatas

        entities.forEach(async (entity) => {
            const repository = await connection.getRepository(entity.name)
            await repository.query('DELETE FROM `' + entity.tableName + '`')
          })
    }
}

export default connection