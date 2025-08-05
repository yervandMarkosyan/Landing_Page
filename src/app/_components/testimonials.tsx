"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react'
import { WhatsappLogoIcon } from '@phosphor-icons/react'
import baldCritic from '../../../public/Photos/baldCritic.jpeg'
import critic from '../../../public/Photos/Critic.avif'
import Image from 'next/image'

const testimonials = [
  {
    content:
      "Her ability to capture emotions and tell stories through her lens is truly breathtaking—every shot feels like a masterpiece.",
    author: "Critic",
    role: "Critic in Law",
    image: critic,
  },
  {
    content:
      "Nina, your photos are more than just pictures—they capture feelings, stories, and the beauty in every moment. I’m so proud to have such a talented photographer as my mom!",
    author: "Bald Critic",
    role: "Smartest Guy in the World",
    image: baldCritic,
  },
  {
    content: 
      "Her ability to capture emotions and tell stories through her lens is truly breathtaking—every shot feels like a masterpiece.",
    author: "Critic",
    role: "Critic in Law",
    image: critic,
  },
   {
    content:
      "Nina, your photos are more than just pictures—they capture feelings, stories, and the beauty in every moment. I’m so proud to have such a talented photographer as my mom!",
    author: "Bald Critic",
    role: "Smartest Guy in the World",
    image: baldCritic,
  },
]

export function Testimonials() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  })


  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section id="feedbacks" className="bg-[#f089141f] py-16">
      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-12">Clients' Feedbacks</h2>

        <div className="relative max-w-4xl mx-auto">

          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/2)] px-3">
                  <article className="bg-[#f08914] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className='flex flex-col items-center text-center space-y-4'>
                      <div className='relative w-24 h-24'>
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          sizes='96px'
                          className='object-cover rounded-full'
                        />
                      </div>

                      <p className='text-gray-200 select-none'>{item.content}</p>

                      <div>
                        <p className='font-bold'>{item.author}</p>
                        <p className='text-sm text-gray-900'>{item.role}</p>
                      </div>

                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
            onClick={scrollPrev}
          >
            <ChevronLeft className='w-6 h-6 text-gray-600' />
          </button>

          <button
            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
            onClick={scrollNext}
          >
            <ChevronRight className='w-6 h-6 text-gray-600' />
          </button>

        </div>

      </div>
    </section>
  )
}