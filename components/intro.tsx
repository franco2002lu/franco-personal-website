import Link from 'next/link'
import {Button, HStack} from "@chakra-ui/react";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        Ji (Franco) Lu
      </h1>
      <h4 className="text-center text-2xl mt-5 md:pl-8">
          <HStack p={'1rem'} spacing={'0.5rem'} fontWeight={'bold'} align={'center'}>
              <Link href="/posts/resume" className="hover:underline">
                  <Button variant='ghost' fontSize={'2xl'}>
                      Resume
                  </Button>
              </Link>
              <Link href="/posts/self-intro" className="hover:underline">
                  <Button variant='ghost' fontSize={'2xl'}>
                      Intro
                  </Button>
              </Link>
              <Link href="/posts/my-hobbies" className="hover:underline">
                  <Button variant='ghost' fontSize={'2xl'}>
                      Hobbies
                  </Button>
              </Link>
          </HStack>
      </h4>
    </section>
  )
}

export default Intro
