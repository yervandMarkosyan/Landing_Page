import Image from "next/image";
import Canon from '../../../public/Photos/Photographer1.jpeg'
import Social from '../../../public/Photos/Photographer2.jpg'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon, ArrowArcRightIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section id="about" className="bg-[#2d2d2c] py-16">
      <div className="container px-4 mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative" data-aos="fade-up-right" data-aos-delay="300">

            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
              <Image
                src={Social}
                alt="Social"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={Canon}
                alt="Canon"
                fill
                quality={100}
                priority
              />
            </div>

          </div>

          <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
            <h2 className="text-4xl font-bold text-[#f0702b]">ABOUT</h2>

            <p className="text-[#f0702b] font-helvetica" >
              A passionate photographer with an eye for capturing life’s most fleeting and beautiful moments, Nina specializes in 
              translating emotions into timeless visuals. With a deep love for storytelling through imagery, their work ranges from 
              stunning portraits to breathtaking landscapes, each framed with precision and artistry. Whether freezing a heartfelt 
              expression, the magic of a golden sunset, or the energy of a bustling city, they bring an unparalleled creative touch to 
              every shot, turning ordinary moments into extraordinary memories.
            
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-[#f0702b]">
                <ArrowArcRightIcon className="text-[#f0702b]" />
                Active since 2023.
              </li>
              <li className="flex items-center gap-2 text-[#f0702b]" >
                <ArrowArcRightIcon className="text-[#f0702b]" />
                Individual photographer with imagination.
              </li>
              <li className="flex items-center gap-2 text-[#f0702b]">
                <ArrowArcRightIcon className="text-[#f0702b]"  />
                Not just quality, but individuality.
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                target='_blank'
                href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`}
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                WhatsApp
              </a>

              <a
                href="#"
                className=" flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md text-[#f0702b]"
              >
                <MapPin className="w-5 h-5 text-[#f0702b]" />
                Address
              </a>
            </div>

          </div>

        </div>


      </div>
    </section>
  )
}