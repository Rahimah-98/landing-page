import Link from 'next/link';
import Image from 'next/image';

export const Logo = () => {
  return (
    <Link
      href='/'
      aria-label='home'
      className='flex items-center space-x-2 gap-2'>
      <Image
        src='/yellow-pr.png'
        alt='Logo'
        width={50}
        height={50}
        className='rounded-full'
      />
      <span className='text-lg text-gray-900/70 font-semibold hover:text-amber-400 hover:-translate-y-0.5 duration-200'>
        Rahimah Ansari
      </span>
    </Link>
  );
};
