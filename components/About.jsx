import Skills from '@/components/Skills';
import Link from 'next/link';

export default function About() {
  return (
    <section className='py-28 px-6 max-w-6xl mx-auto text-gray-700 '>
      <h2 className='text-center text-3xl font-bold mb-24 mt-12'>ABOUT ME</h2>

      <div className='grid md:grid-cols-2 gap-16'>
        <div>
          <h3 className='font-semibold text-xl mb-10'>Get to know me!</h3>
          <p className='text-gray-700 leading-relaxed'>
            I&apos;m a frontend developer focused on building responsive web
            applications. I enjoy turning designs into real products and
            improving performance and UX. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Tempora unde eveniet ducimus quas
            veniam esse corporis cum, assumenda voluptatum. Minima! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Quis ipsum architecto
            dicta, nesciunt nostrum commodi molestiae excepturi nulla cupiditate
            fugit!
          </p>

          <div className='flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit mt-12'>
            <button className='lg:inline-flex bg-primary text-white py-3 px-6 rounded hover:-translate-y-0.5 duration-200'>
              <Link href='#'>
                <span className='uppercase'>Contact me</span>
              </Link>
            </button>
          </div>
        </div>

        <div>
          <Skills />
        </div>
      </div>
    </section>
  );
}
