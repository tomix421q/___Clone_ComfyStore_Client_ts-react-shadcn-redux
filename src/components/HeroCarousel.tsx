import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      // ...
    </Carousel>
  )
}

import { Card, CardContent } from '@/components/ui/card'

import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'

const carouselImages = [hero1, hero2, hero3, hero4]

export default function HeroCarousel() {
  return (
    <div className='hidden lg:block'>
      <Carousel className='' plugins={[Autoplay({ delay: 10000 })]}>
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className='p-2'>
                    <img src={image} alt='hero' className='w-full h-[24rem] rounded-md object-cover' />
                  </CardContent>
                </Card>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious className='size-6 ml-7' />
        <CarouselNext className='size-6 mr-7' />
      </Carousel>
    </div>
  )
}
