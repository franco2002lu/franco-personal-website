import CoverImage from './cover-image'
import PostTitle from './post-title'

type Props = {
  title: string
  coverImage: string
}

const PostHeader = ({ title, coverImage}: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
        </div>
      </div>
    </>
  )
}

export default PostHeader
