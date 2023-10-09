type PostType = {
  slug: string
  title: string
  priority: number
  coverImage: string
  mainImage: string
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export default PostType
