import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Nina, Navbar } from "./_components/nina";
import { Testimonials } from "./_components/testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Nina />
      <About />
      <Testimonials />
      <Footer />
    </main>
  )
}