import Image from 'next/image'
import Link from "next/link";

const photos = [
  { src: "/Photos/Nina_13.jpg", alt: "Photo 13" },
  
  { src: "/Photos/Nina_17.jpg", alt: "Photo 17" },
  { src: "/Photos/Nina_6.jpg", alt: "Photo 6" },
  { src: "/Photos/Nina_19.jpg", alt: "Photo 19" }, 
  { src: "/Photos/Nina_20.jpg", alt: "Photo 20" },
  
  { src: "/Photos/Nina_11.jpg", alt: "Photo 11" },
  { src: "/Photos/Nina_8.jpg", alt: "Photo 8" },
  { src: "/Photos/Nina_15.jpg", alt: "Photo 15" },
  { src: "/Photos/Nina_9.jpg", alt: "Photo 9" },
  { src: "/Photos/Nina_2.jpg", alt: "Photo 2" },
  
  { src: "/Photos/Nina_10.jpg", alt: "Photo 10" },
  { src: "/Photos/Nina_3.jpg", alt: "Photo 3" },
  { src: "/Photos/Nina_21.jpg", alt: "Photo 21" },
  { src: "/Photos/Nina_5.jpg", alt: "Photo 5" },
  { src: "/Photos/Nina_1.jpg", alt: "Photo 1" },
 
  { src: "/Photos/Nina_22.jpg", alt: "Photo 22" },
  
];



export function Navbar () {
  return (
    <nav className="bg-white text-gray-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Website</h1>
        <ul className="flex space-x-4">
          <li><Link href="#portfolio" className="hover:text-gray-400">Portfolio</Link></li>
          <li><Link href="#about" className="hover:text-gray-400">About</Link></li>
          <li><Link href="#feedbacks" className="hover:text-gray-400">Feedbacks</Link></li>
           <li><Link href="#certificates" className="hover:text-gray-400">Certificates</Link></li>
            <li><Link href="#certificates" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};


export function Nina() {
  return (
    <section id="portfolio">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
        {photos.map((photo, index) => (
          <Image
            key={index}
            src={photo.src}
            alt={photo.alt}
            width={250}
            height={250}
            className="border-none w-full h-full object-fill"
          />
        ))}
      </div>

    </section>
  )
}
    
    
   