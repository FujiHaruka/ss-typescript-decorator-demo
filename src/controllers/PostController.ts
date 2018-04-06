import { JsonController, Get, Post as HttpPost, Param, Delete, Body, OnUndefined } from 'routing-controllers'
import { Service, Inject } from 'typedi'
import { PostRepository } from '../repository/PostRepository'
import Post from '../model/Post'

@Service()
@JsonController()
export class PostController {

  @Inject()
  private postRepository: PostRepository

  @Get('/posts')
  all () {
    return this.postRepository.findAll()
  }

  @Get('/posts/:id')
  @OnUndefined(404)
  one (@Param('id') id: number) {
    return this.postRepository.findOne(id)
  }

  @HttpPost('/posts')
  post (@Body() post: Post) {
    return this.postRepository.save(post)
  }

  @Delete('/posts/:id')
  @OnUndefined(200)
  delete (@Param('id') id: number) {
    return this.postRepository.remove(id)
  }

}
