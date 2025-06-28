export class Item {
  id: string
  image: string
  title: string
  description: string
  tags: string[]

  constructor(params: ItemParams) {
    this.id = params.id
    this.image = params.image
    this.title = params.title
    this.description = params.description
    this.tags = params.tags
  }
}

interface ItemParams {
  id: string
  image: string
  title: string
  description: string
  tags: string[]
}
