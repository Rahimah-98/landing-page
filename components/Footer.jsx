import { Linkedin, Github, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='relative w-full text-white'>
      <div className='absolute inset-0 bg-black' />

      <div className='relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div>
          <h3 className='text-2xl font-bold mb-3 uppercase tracking-wider'>
            Rahimah Ansari
          </h3>
          <p className='text-gray-300 text-sm leading-relaxed max-w-md'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>

        <div className='flex flex-col md:items-center'>
          <div className='flex flex-col'>
            <h4 className='font-semibold mb-6 text-2xl'>Social</h4>

            <div className='flex gap-4'>
              {[Linkedin, Github, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href='#'
                  className='p-2 bg-black border border-amber-400 text-amber-400 rounded hover:-translate-y-0.5 duration-200'>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='relative text-center border-t border-amber-400/20 py-6 text-xs text-gray-400'>
        © {new Date().getFullYear()} Developed with 💛 by Rahimah Ansari
      </div>
    </footer>
  );
}
