import { Service } from 'typedi'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Repository } from 'typeorm'
import Post from '../model/Post'

@Service()
export class PostRepository {

  @InjectRepository(Post)
  private repository: Repository<Post>

  findAll () {
    return this.repository.find()
  }

  findOne (id: number) {
    return this.repository.findOneById(id)
  }

  save (post: Post) {
    return this.repository.save(post)
  }

  remove (id: number) {
    return this.repository.removeById(id)
  }

}
