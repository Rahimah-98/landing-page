import Link from 'next/link';
import { TextEffect } from '@/components/ui/text-effect';
import { HeroHeader } from './header';

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className='overflow-hidden h-screen bg-gray-50'>
        <div
          aria-hidden
          className='absolute inset-0 isolate hidden opacity-65 contain-strict lg:block'>
          <div className='w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]' />
          <div className='h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]' />
          <div className='h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]' />
        </div>
        <section>
          <div className='relative pt-24 md:pt-36 mt-20 md:mt-10'>
            <div
              aria-hidden
              className='absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]'
            />

            <div className='mx-auto max-w-7xl px-6'>
              <div className='text-center sm:mx-auto lg:mr-auto lg:mt-0 text-gray-900/90'>
                <TextEffect
                  preset='fade-in-blur'
                  speedSegment={0.3}
                  as='h1'
                  className='mx-auto mt-8 max-w-5xl text-2xl font-semibold md:text-4xl lg:mt-16 xl:text-[4.25rem] uppercase'>
                  Hi, I&apos;m Rahimah Ansari
                </TextEffect>
                <TextEffect
                  per='line'
                  preset='fade-in-blur'
                  speedSegment={0.3}
                  delay={0.5}
                  as='p'
                  className='mx-auto mt-8 max-w-2xl text-balance text-md text-gray-700'>
                  Highly customizable components for building modern websites
                  and applications that look and feel the way you mean it.
                </TextEffect>

                <button className='rounded px-24 py-5 text-xl shadow-lg text-white mt-12 hover:-translate-y-0.5 bg-amber-400 duration-200'>
                  <Link href='#link'>
                    <span className='uppercase font-semibold tracking-wider'>
                      Projects
                    </span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
