import Navbar from '@/components/navbar'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <a className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8" href="/">
        Rafiki Digital
        <span className="text-red-500">
          .
          </span>
      </a>
      <Navbar />
    </section>
  )
}
