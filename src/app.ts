import 'reflect-metadata'
import { createKoaServer, useContainer as routingUseContainer } from 'routing-controllers'
import { createConnection, useContainer as dbUseContainer } from 'typeorm'
import { Container } from 'typedi'
import { PostController } from './controllers/PostController'
import Post from './model/Post'

routingUseContainer(Container)
dbUseContainer(Container)

main().catch(console.error)

async function main () {
  await createConnection({
    type: 'sqlite',
    database: 'test.database',
    entities: [
      Post,
    ],
    synchronize: true,
    logging: true,
  })
  const app = createKoaServer({
    controllers: [
      PostController,
    ],
  })

  app.listen(3000)
  console.log('Server is up and running at port 3000')
}
