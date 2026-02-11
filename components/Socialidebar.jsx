import { Linkedin, Github, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function SocialSidebar() {
  return (
    <div className='hidden md:flex absolute left-4 top-70 z-40 flex-col gap-4'>
      {[Linkedin, Github, Instagram].map((Icon, i) => (
        <Link
          key={i}
          href='/'
          className='p-2 bg-gray-900/70 shadow-lg rounded transition duration-200 text-white hover:-translate-y-0.5 hover:bg-amber-400'>
          <Icon size={18} />
        </Link>
      ))}
    </div>
  );
}
