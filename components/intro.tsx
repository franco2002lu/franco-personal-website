import { CMS_NAME } from '../lib/constants'

// fixme: navbar here
const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        Ji (Franco) Lu
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        navbar here{' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Next.js
        </a>{' '}
        and {CMS_NAME}.
      </h4>
    </section>
  )
}

export default Intro
