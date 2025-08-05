
import inline from '../../../public/inline-certification-program.avif'
import film from '../../../public/film_photography.png'
import street from '../../../public/street_photography.png'
import visual from '../../../public/visual_storytelling.png'
import Image from 'next/image'
import { FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react/dist/ssr'

const brands = [
  { name: "Film Photography", logo: film },
  { name: "Inline Certification", logo: inline },
  { name: "Street Photography", logo: street },
  { name: "Visual Storytelling", logo: visual },
  { name: "Film Photography", logo: film },
  { name: "Inline Certification", logo: inline },
]

export function Footer() {
  return (
    <section id="certificates" className="bg-[#ff2b2b] py-16 text-white">
      <div className='container mx-auto px-4'>

        <div className='border-b border-white/60 pb-8'>
          <h4 className='text-3xl font-semibold mb-8 text-center'>Certificates</h4>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

        </div>

        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>Personal Website</h3>
            <p className='mb-4'>Not just service but art.</p>
            <a
              href="#"
              className='bg-green-500 px-4 py-2 rounded-md'
            >
              Contact Me!
            </a>
          </div>


          <div>
            <h3 className='text-2xl font-semibold mb-2'>Contact Info</h3>
            <p>Email: photographer@photographer.com</p>
            <p>Telefone: (XX) 61 123456789</p>
            <p>Brasilia, Federal District, Brazil</p>
          </div>


          <div>
            <h3 className='text-2xl font-semibold mb-2'>Social Networks</h3>
            <div className='flex gap-4'>
              <a
                href="#"
                target='_blank'
              >
                <FacebookLogoIcon className='w-8 h-8' />
              </a>
              <a
                href="#"
                target='_blank'
              >
                <InstagramLogoIcon className='w-8 h-8' />
              </a>
              <a
                href="#"
                target='_blank'
              >
                <YoutubeLogoIcon className='w-8 h-8' />
              </a>
            </div>
          </div>

        </footer>
        
      </div>
    </section>
  )
}