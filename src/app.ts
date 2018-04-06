import 'reflect-metadata'
import { createKoaServer, useContainer } from 'routing-controllers'
import { Container } from 'typedi'
import { PostController } from './controllers/PostController'

useContainer(Container)

const app = createKoaServer({
  controllers: [
    PostController,
  ],
})

app.listen(3000)
console.log('Server is up and running at port 3000')
