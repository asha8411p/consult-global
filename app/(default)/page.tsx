export const metadata = {
  title: 'Home',
  description: 'Page description',
}

import Hero from '@/components/hero-home'
import Features from '@/components/features-home'
// import FeaturesWorld from '@/components/features-world'
//import FeaturesBlocks from '@/components/features-blocks'
// import News from '@/components/news'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <FeaturesWorld /> */}
     {/* <FeaturesBlocks /> */}
      {/* <News /> */}
      <Cta />
    </>
  )
}
