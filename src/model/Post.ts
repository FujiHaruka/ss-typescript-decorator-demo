export class Post {

  id: number
  title: string
  text: string
  createDate: Date = new Date()

  constructor (id: number,
               title: string,
               text: string) {
    this.id = id
    this.title = title
    this.text = text
  }

}
