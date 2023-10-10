type PostType = {
  slug: string
  title: string
  priority: number
  coverImage: string
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export default PostType
