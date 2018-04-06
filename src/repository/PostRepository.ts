import { Service } from 'typedi'
import { Post } from '../model/Post'

@Service()
export class PostRepository {

  private posts = [
    new Post(1, 'post #1', 'about post #1'),
    new Post(2, 'post #2', 'about post #2'),
    new Post(3, 'post #3', 'about post #3'),
    new Post(4, 'post #4', 'about post #4'),
  ]

  findAll () {
    return Promise.resolve(this.posts)
  }

  findOne (id: number) {
    let foundPost: Post = undefined
    this.posts.forEach(post => {
      if (post.id === id) {
        foundPost = post
      }
    })
    return foundPost
  }

  save (post: Post) {
    this.posts.push(post)
    return post
  }

  remove (id: number) {
    const post = this.findOne(id)
    if (post) {
      this.posts.splice(this.posts.indexOf(post), 1)
    }
    return post
  }

}
